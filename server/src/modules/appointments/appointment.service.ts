import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AppointmentStatus, dayOfWeek, userRole } from '@prisma/client';
import { PrismaService } from 'src/prisma';
import { CreateAppointmentDto } from './dtos';
import { isUUID } from 'validator';
import { Request } from 'express';


@Injectable()
export class AppointmentService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {

    const data = await this.prisma.appointment.findMany();

    return {
      message: 'success',
      data: data,
    };
  }

  async create(payload: CreateAppointmentDto, req: Request & { role?: userRole; userId: string }) {
    if (
      !isUUID(payload.doctorId)
    ) {
      throw new BadRequestException('IDs error not uuid');
    }

    const foundSchedule = await this.prisma.schedules.findFirst({where: {doctorId: payload.doctorId}});

    const findPending = await this.prisma.appointment.findFirst({
      where: { userId: req.userId, status: AppointmentStatus.PENDING },
    });

    if (findPending) {
      throw new BadRequestException("Siz Shifokor ko'rigiga yozilgansiz");
    }

    const count =
      (await this.prisma.appointment.count({
        where: {
          doctorId: payload.doctorId,
        },
      })) + 1;

    const lastDate = await this.prisma.appointment.findMany({
      where: { doctorId: payload.doctorId },
    });

    const now = new Date();
    let halfHourLater: Date;

    if (!lastDate || lastDate.length === 0) {
      halfHourLater = new Date(now.getTime() + 30 * 60 * 1000);
    } else {
      const lastAppointmentDate: any = lastDate.at(-1)?.appointmentDate;
      halfHourLater = new Date(
        new Date(lastAppointmentDate).getTime() + 30 * 60 * 1000,
      );
    }

    const data = await this.prisma.appointment.create({
      data: {
        userId: req.userId,
        doctorId: payload.doctorId,
        appointmentDate: halfHourLater,
        queueNumber: count,
        status: AppointmentStatus.PENDING,
      },
    });

    return {
      message: 'success',
      data: data,
    };
  }

  async getByUserId(req: Request & { role?: userRole; userId: string }) {
    const data = await this.prisma.appointment.findFirst({
      where: { userId: req.userId, status: AppointmentStatus.PENDING },
    });

    return {
      message: 'success',
      data: data,
    };
  }

  async update(req: Request & { role?: userRole; userId: string }) {

    const findUser = await this.prisma.appointment.findFirst({
      where: { userId: req.userId, status: AppointmentStatus.PENDING },
    });

    if(!findUser){
      throw new NotFoundException('User Topilmadi')
    }

    await this.prisma.appointment.update({where: {id: findUser.id}, data: {
      status: AppointmentStatus.CONFIRMED,
    }});

    return {
      message: "success CONFIRMED",
    }
  }
}
