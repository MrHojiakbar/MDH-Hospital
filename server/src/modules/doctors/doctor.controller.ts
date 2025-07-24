import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { DoctorService } from "./doctor.service";
import { DoctorCreateDto, DoctorUpdateDto, GetByTypeDto } from "./dtos";
import { ApiConsumes } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { Protected, Roles } from "src/decaratores";
import { userRole } from "@prisma/client";

@Controller('doctors')
export class DoctorController {
  constructor(private readonly service: DoctorService ){};


  @Get()
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager])
  async getAll(){
    return await this.service.getAll();
  }

  @Get(":id")
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager])
  async getById(@Param('id') id: string){
    return await this.service.getById(id);
  }

  @Post('/getByType')
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager])
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  async getByType(@Body() data: GetByTypeDto){
    return await this.service.getByType(data)
  }

  @Post()
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  async create(@Body() data: DoctorCreateDto){
    return await this.service.create(data);
  }

  @Patch(':id')
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager])
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  async update(@Body() data: DoctorUpdateDto, @Param('id') id: string){
    return await this.service.update(id, data)
  }

  @Delete(':id')
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager])
  async delete(@Param('id') id: string){
    return await this.service.delete(id)
  }
}