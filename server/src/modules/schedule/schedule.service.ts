import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { AddScheduleDto } from './dtos';

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  async addSchedule(payload: AddScheduleDto, userId: string) {
    const founded = await this.prisma.doctor.findFirst({
      where: {
        userId: userId,
      },
    });
    if (!founded) {
      throw new ConflictException('Sizda doctorlik huquqi mavjud emas!');
    }

    const formatTime = (time: string) => {
      return `${time}:00`;
    };

    const existSchedule = await this.prisma.schedules.findFirst({
      where: {
        userId: userId,
      },
    });

    const doctor = await this.prisma.doctor.findFirst({
      where: { userId: userId },
    });

    if (existSchedule) {
      await this.prisma.schedules.updateMany({
        data: {
          dayOfWeek: payload.dayOfWeek,
          startTime: formatTime(payload.startTime),
          endTime: formatTime(payload.endTime),
          userId: userId,
          doctorId: doctor?.id,
        },
        where: {
          doctorId: userId,
        },
      });
    } else {
      await this.prisma.schedules.create({
        data: {
          dayOfWeek: payload.dayOfWeek,
          startTime: formatTime(payload.startTime),
          endTime: formatTime(payload.endTime),
          userId: userId,
          doctorId: doctor?.id,
        },
      });
    }

    return {
      message: 'Success',
    };
  }
}
