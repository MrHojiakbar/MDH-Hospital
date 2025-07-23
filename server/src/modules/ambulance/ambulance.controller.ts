import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AmbulanceService } from './ambulance.service';
import { Protected, Roles } from 'src/decaratores';
import { userRole } from '@prisma/client';
import { CreateAmbulance } from './dtos/CreateAmbulance.dto';
import { UpdateAmbulance } from './dtos/UpdateAmbulance.dto';

@Controller('ambulance')
export class AmbulanceController {
  constructor(private readonly service: AmbulanceService) {}

  @Get()
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager])
  async getAll() {
    return await this.service.getAll();
  }

  @Get(':id')
  @Protected(false)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  async getById(@Param('id') id: string) {
    return await this.service.getById(id);
  }

  @Post()
  @Protected(false)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  async create(@Body() payload: CreateAmbulance) {
    return await this.service.create(payload);
  }

  @Patch()
  @Protected(true)
  @Roles([userRole.admin, userRole.manager])
  async update(@Param('id') id: string, @Body() payload: UpdateAmbulance) {
    return await this.service.upadte(id, payload);
  }

  @Delete()
  @Protected(false)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  async delete(@Param('id') id:string) {
    return await this.service.delete(id);
  }
}
