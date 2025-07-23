import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { AddScheduleDto } from './dtos';

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  async addSchedule(payload: AddScheduleDto, userId: string) {
    const founded = await this.prisma.doctor.findFirst({
      where: {
        id: userId,
      },
    });
    if (!founded) {
      throw new ConflictException("Qayta urinib ko'ring");
    }

    const schedule = await this.prisma.schedules.create({
      data: {
        dayOfWeek: payload.dayOfWeek,
        startTime: payload.startTime,
        endTime: payload.endTime,
        doctorId: userId,
      },
    });

    return {
      message: 'Success',
      data: {
        schedule,
      },
    };
  }
}
