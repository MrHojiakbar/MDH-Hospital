import { Module } from "@nestjs/common";
import { AmbulanceController } from "./ambulance.controller";
import { AmbulanceService } from "./ambulance.service";
import { PrismaService } from "src/prisma";

@Module({
    controllers:[AmbulanceController],
    providers:[AmbulanceService,PrismaService]
})
export class AmbulanceModule {}