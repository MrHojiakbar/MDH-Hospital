import { Injectable, OnModuleInit } from '@nestjs/common';
import { gender, userRole } from '@prisma/client';
import { PrismaService } from 'src/prisma';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    try {
      await this.#_seedUser();
      console.log('✅');
    } catch (error) {
      console.log('❌');
    }
  }

  async rergister() {}

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
