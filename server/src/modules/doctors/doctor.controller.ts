import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { DoctorService } from "./doctor.service";
import { DoctorCreateDto, DoctorUpdateDto, GetByTypeDto } from "./dtos";

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
  async getByType(@Body() data: GetByTypeDto){
    return await this.service.getByType(data)
  }

  @Post()
  async create(@Body() data: DoctorCreateDto){
    return await this.service.create(data);
  }

  @Patch(':id')
  async update(@Body() data: DoctorUpdateDto, @Param('id') id: string){
    return await this.service.update(id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
    return await this.delete(id);
  }
}