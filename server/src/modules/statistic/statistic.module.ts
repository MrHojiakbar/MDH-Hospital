import { Module } from "@nestjs/common";
import { StatisticController } from "./statistic.controller";
import { StatisticService } from "./statistic.service";
import { DoctorService } from "../doctors";
import { PrismaService } from "src/prisma";

@Module({
    controllers:[StatisticController],
    providers:[StatisticService,DoctorService,PrismaService]
})

export class StatisticModule {}