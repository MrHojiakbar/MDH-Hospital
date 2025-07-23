import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { DoctorCreateDto, DoctorUpdateDto, GetByTypeDto } from './dtos';
import { isUUID } from 'validator';

@Injectable()
export class DoctorService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const data = await this.prisma.doctor.findMany();

    const newData = await Promise.all(
      data.map(async (item) => {
        const foundUser = await this.prisma.user.findUnique({
          where: { id: item.userId },
        });
        return {
          ...item,
          user: foundUser,
        };
      }),
    );

    return {
      message: 'success',
      data: newData,
    };
  }

  async getById(userId: string) {
    if (!isUUID(userId)) {
      throw new BadRequestException('UserId Error Format');
    }

    const data = await this.prisma.doctor.findUnique({ where: { id: userId } });

    return {
      message: 'success',
      data: data,
    };
  }

  async getByType(workType: GetByTypeDto) {
    const data = await this.prisma.doctor.findMany({
      where: { workType: workType.workType },
    });

    return {
      message: 'success',
      data: data,
    };
  }

  async create(payload: DoctorCreateDto) {
    if (!isUUID(payload.userId)) {
      throw new BadRequestException('userId Error Format');
    }

    const foundUser = await this.prisma.user.findUnique({
      where: { id: payload.userId },
    });

    if (!foundUser) {
      throw new NotFoundException('User Not Found');
    }

    const founDoctorUserId = await this.prisma.doctor.findFirst({
      where: { userId: payload.userId },
    });

    if (founDoctorUserId) {
      throw new BadRequestException(
        "Bunday User ID blian doctor yaratib bo'lingan",
      );
    }

    const data = await this.prisma.doctor.create({
      data: {
        userId: payload.userId,
        workType: payload.workType,
        stars: payload.stars,
        roomNumber: payload.roomNumber,
        status: payload.status,
        bio: payload.bio,
        experienceYears: payload.experienceYears,
      },
    });

    return {
      message: 'success',
      data: data,
    };
  }

  async update(userId: string, payload: DoctorUpdateDto) {
    if (!isUUID(userId)) {
      throw new BadRequestException('userId Error Format');
    }

    const foundUser = await this.prisma.doctor.findUnique({
      where: { id: userId },
    });

    if (!foundUser) {
      throw new NotFoundException('User Not Found');
    }

    const data = await this.prisma.doctor.update({
      where: { id: userId },
      data: {
        workType: payload?.workType || foundUser.workType,
        stars: payload?.stars || foundUser.stars,
        roomNumber: payload?.roomNumber || foundUser.roomNumber,
        status: payload?.status || foundUser.status,
        bio: payload?.bio || foundUser.bio,
        experienceYears: payload.experienceYears || foundUser.experienceYears,
      },
    });

    return {
      message: 'success',
      data: data,
    };
  }

  async delete(userId: string) {
    if (!isUUID(userId)) {
      throw new BadRequestException('userId Error Format');
    }

    const foundUser = await this.prisma.doctor.findUnique({
      where: { id: userId },
    });

    if (!foundUser) {
      throw new NotFoundException('User Not Found');
    }

    await this.prisma.doctor.delete({ where: { id: userId } });

    return {
      message: 'success',
    };
  }
}
