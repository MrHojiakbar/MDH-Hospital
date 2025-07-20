import {
  ConflictException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { gender, userRole } from '@prisma/client';
import { PrismaService } from 'src/prisma';
import { LoginDto, RegisterDto } from './dtos';
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
    }
  }

  async rergister(payload: RegisterDto, res: Response) {
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

    const accessToken = await this.jwt.signAsync({
      id: user.id,
      role: user.role,
    });
    const refreshToken = await this.jwt.signAsync({
      id: user.id,
      role: user.role,
    });

    res.cookie('accesToken', accessToken, {
      maxAge: 60 * 60 * 1000,
      secure: false,
    });
    res.cookie('refreshToken', refreshToken, {
      maxAge: 60 * 60 * 1000 * 24,
      secure: false,
    });

    return {
      message: 'Success!',
      data: {
        user: user,
        token: {
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

    const accessToken = await this.jwt.signAsync({
      id: founded.id,
      role: founded.role,
    });
    const refreshToken = await this.jwt.signAsync({
      id: founded.id,
      role: founded.role,
    });

    res.cookie('accesToken', accessToken, {
      maxAge: 60 * 60 * 1000,
      secure: false,
    });
    res.cookie('refreshToken', refreshToken, {
      maxAge: 60 * 60 * 1000 * 24,
      secure: false,
    });
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

  async #_seedUser() {
    const user = {
      email: 'dilmuhammadadbumalikov06@gmail.com',
      fullname: 'Dilmuhammad Abdumalikov',
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
      password: '123456',
      phoneNumber: '+998998890524',
      role: userRole.admin,
      gender: gender.male,
    };

    const founded = await this.prisma.user.findFirst({
      where: {
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
    });
    if (!founded) {
      await this.prisma.user.create({
        data: {
          email: user.email,
          fullname: user.fullname,
          imageUrl: user.imageUrl,
          password: user.password,
          phoneNumber: user.phoneNumber,
          role: user.role,
          gender: user.gender,
        },
      });
    }
  }
}
