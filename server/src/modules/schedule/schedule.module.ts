import { Module } from "@nestjs/common";
import { ScheduleController } from "./schedule.controller";
import { PrismaService } from "src/prisma";
import { ScheduleService } from "./schedule.service";

@Module({
    controllers: [ScheduleController],
    providers: [PrismaService, ScheduleService]
})
export class ScheduleModule{}