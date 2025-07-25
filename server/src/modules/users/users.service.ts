import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { gender, userRole } from '@prisma/client';
import { PrismaService } from 'src/prisma';
import { AddUserDto, LoginDto, RegisterDto } from './dtos';
import * as bcrypt from 'bcryptjs';
import { Response } from 'express';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async onModuleInit() {
    try {
      await this.#_seedUser();
      console.log('✅');
    } catch (error) {
      console.log('❌');
      console.log(error);
    }
  }

  async getAll() {
    const data = await this.prisma.user.findMany();

    return {
      message: 'success',
      data: data,
    };
  }

  async register(payload: RegisterDto, res: Response) {
    const founded = await this.prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (founded) {
      throw new ConflictException(
        'Bu emaillik foydalanuvchi allaqachon mavjud!',
      );
    }
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: payload.email,
        imageUrl:
          'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
        gender: payload.gender,
        password: hashedPassword,
        phoneNumber: payload.phoneNumber,
        role: userRole.user,
        fullname: payload.fullname,
      },
    });

    const { accessToken, refreshToken } = await this.#_createToken(
      user.id,
      user.role,
      res,
    );

    return {
      message: 'Success!',
      data: {
        user: user,
        tokens: {
          accessToken,
          refreshToken,
        },
      },
    };
  }
  async login(payload: LoginDto, res: Response) {
    const founded = await this.prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (!founded) {
      throw new NotFoundException('Foydalanuvchi topilmadi!');
    }

    const isCorrectPassword = await bcrypt.compare(
      payload.password,
      founded.password,
    );

    if (!isCorrectPassword) {
      throw new NotFoundException('Parol xato kiritildi!');
    }

    const { accessToken, refreshToken } = await this.#_createToken(
      founded.id,
      founded.role,
      res,
    );
    return {
      message: 'Success',
      data: {
        user: founded,
        tokens: {
          accessToken,
          refreshToken,
        },
      },
    };
  }
  async google(email: string, res: Response) {
    const founded = await this.prisma.user.findFirst({
      where: { email: email },
    });
    if (!founded) {
      throw new BadRequestException("Noto'g'ri google hisob kiritildi!");
    }

    const { accessToken, refreshToken } = await this.#_createToken(
      founded.id,
      founded.role,
      res,
    );

    return {
      message: 'Success!',
      data: {
        user: founded,
        tokens: {
          accessToken,
          refreshToken,
        },
      },
    };
  }
  async add(payload: AddUserDto, res: Response) {
    const founded = await this.prisma.user.findFirst({
      where: { email: payload.email },
    });

    if (founded) {
      throw new ConflictException('Bu foydalanuvchi allaqachon mavjud!');
    }
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const doctor = await this.prisma.user.create({
      data: {
        email: payload.email,
        fullname: payload.fullname,
        gender: payload.gender,
        imageUrl:
          'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
        password: hashedPassword,
        phoneNumber: payload.phoneNumber,
        role: userRole.doctor,
      },
    });

    return {
      message: 'Succuess',
      data: {
        user: doctor,
      },
    };
  }
  async me(id: string) {
    const founded = await this.prisma.user.findFirst({
      where: { id },
    });
    if (!founded) {
      throw new BadRequestException("Siz hali ro'yxatdan o'tmagansiz!");
    }
    return {
      message: 'Success',
      data: {
        user: founded,
      },
    };
  }
  async #_seedUser() {
    const users = [
      {
        email: 'dilmuhammadabdumalikov06@gmail.com',
        fullname: 'Dilmuhammad Abdumalikov',
        imageUrl:
          'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
        password: '123456',
        phoneNumber: '+998998890524',
        role: userRole.admin,
        gender: gender.male,
      },
      {
        email: 'yuvsufn@gmail.com',
        fullname: 'Muhammad Yusuf Nasrulloh',
        imageUrl:
          'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
        password: 'salom',
        phoneNumber: '+998917809960',
        role: userRole.admin,
        gender: gender.male,
      },
    ];

    for (let user of users) {
      const founded = await this.prisma.user.findUnique({
        where: {
          email: user.email,
        },
      });

      if (!founded) {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        await this.prisma.user.create({
          data: {
            email: user.email,
            fullname: user.fullname,
            imageUrl: user.imageUrl,
            password: hashedPassword,
            phoneNumber: user.phoneNumber,
            role: user.role,
            gender: user.gender,
          },
        });
      }
    }
  }
  async #_createToken(id: string, role: string, res: Response) {
    const accessToken = await this.jwt.signAsync({
      id: id,
      role: role,
      httpOnly: true,
    });
    const refreshToken = await this.jwt.signAsync({
      id: id,
      role: role,
      httpOnly: true,
    });

    res.cookie('accessToken', accessToken, {
      maxAge: 60 * 60 * 1000,
      secure: false,
    });
    res.cookie('refreshToken', refreshToken, {
      maxAge: 60 * 60 * 1000 * 24,
      secure: false,
    });
    return {
      accessToken,
      refreshToken,
    };
  }
}
