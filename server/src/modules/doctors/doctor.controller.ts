import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { DoctorService } from "./doctor.service";
import { DoctorCreateDto, DoctorUpdateDto, GetByTypeDto } from "./dtos";
import { ApiConsumes } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('doctors')
export class DoctorController {
  constructor(private readonly service: DoctorService ){};


  @Get()
  async getAll(){
    return await this.service.getAll();
  }

  @Get(":id")
  async getById(@Param('id') id: string){
    return await this.service.getById(id);
  }

  @Post('/getByType')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  async getByType(@Body() data: GetByTypeDto){
    return await this.service.getByType(data)
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  async create(@Body() data: DoctorCreateDto){
    return await this.service.create(data);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  async update(@Body() data: DoctorUpdateDto, @Param('id') id: string){
    return await this.service.update(id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
    return await this.service.delete(id)
  }
}