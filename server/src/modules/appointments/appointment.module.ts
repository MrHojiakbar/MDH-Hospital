import { Module } from "@nestjs/common";
import { AppointmentController } from "./appointment.controller";
import { AppointmentService } from "./appointment.service";
import { PrismaService } from "src/prisma";


@Module({

  controllers: [AppointmentController],
  providers: [AppointmentService, PrismaService]
})

export class AppointmentModule {};