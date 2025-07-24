import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Protected, Roles } from "src/decaratores";
import { userRole } from "@prisma/client";
import { CreatePatientDto } from "./dtos/CreatePatient.dto";
import { UpdatePatientDto } from "./dtos/UpdatePatient.dto";
import {PatientService} from "./patient.service";

@Controller('patient')
export class PatientController {
    constructor(private readonly service:PatientService) {}
    
    @Get()
    @Roles([userRole.admin,userRole.doctor,userRole.manager])
    @Protected(true)
    async getAll() {
        return await this.service.getAll()
    }

    @Get(':id')
    @Roles([userRole.admin,userRole.doctor,userRole.manager,userRole.user])
    @Protected(false)
    async getById(@Param('id') id:string) {
        return await this.service.getById(id)
    }

    @Post()
    @Roles([userRole.admin,userRole.doctor,userRole.manager,userRole.user])
    @Protected(false)
    async create(@Body() payload:CreatePatientDto) {
        return await this.service.create(payload)
    }

    @Patch(':id')
    @Roles([userRole.admin,userRole.doctor,userRole.manager,userRole.user])
    @Protected(false)
    async update(@Param('id') id:string,@Body() payload:UpdatePatientDto) {
        return await this.service.update(id,payload)
    }
    
    @Delete(':id')
    @Roles([userRole.admin,userRole.manager])
    @Protected(true)
    async delete(@Param('id') id:string) {
        return await this.service.delete(id)
    }
}
