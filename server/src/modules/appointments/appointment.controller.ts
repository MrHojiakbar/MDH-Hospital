import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AppointmentService } from "./appointment.service";
import { Protected, Roles } from "src/decaratores";
import { userRole } from "@prisma/client";
import { CreateAppointmentDto } from "./dtos";
import { Request } from "express";


@Controller('Appointment')
export class AppointmentController {
  constructor(private readonly service: AppointmentService) {};

  @Get()
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager])
  async getAll(){
    return await this.service.getAll()
  }

  @Post()
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  async create(@Body() body: CreateAppointmentDto){
    return await this.service.create(body);
  }

  @Get('getStatus')
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  async getWithUserId(@Req() req: Request & { role?: userRole; userId: string } ){
    return await this.service.getByUserId(req)
  }

  @Get('setConfirmed')
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  async update(@Req() req: Request & { role?: userRole; userId: string } ){
    return await this.service.update(req)
  }

}