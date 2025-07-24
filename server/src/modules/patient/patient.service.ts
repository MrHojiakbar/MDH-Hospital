import { PrismaService } from 'src/prisma';
import { CreatePatientDto } from './dtos/CreatePatient.dto';
import { ambulanceStatus } from '@prisma/client';
import { UpdatePatientDto } from './dtos/UpdatePatient.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientService  {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const allPatients = await this.prisma.patient.findMany();
    return {
      message: 'success',
      count: allPatients.length,
      data: allPatients,
    };
  }
  async getById(id: string) {
    const patient = await this.prisma.patient.findUnique({ where: { id } });
    return {
      message: 'success',
      data: patient,
    };
  }
  async create(payload: CreatePatientDto) {
    
    const newPatient = await this.prisma.patient.create({
      data: payload,
    });

    const findAmbulance = await this.prisma.ambulance.findFirst({
      where: { status: ambulanceStatus.AVAILABLE },
    });

    if (findAmbulance) {
      const updatedAmbulance = await this.prisma.ambulance.update({
        where: { id: findAmbulance.id },
        data: {
          status: ambulanceStatus.ASSIGNED,
          patientId: newPatient.id,
        },
      });

      return {
        message: 'success',
        data: {
          patient: newPatient,
          ambulance: updatedAmbulance,
        },
      };
    } else {
      return {
        message:
          "Hozircha barcha tez yordam mashinalari band. Iltimos, keyinroq urinib ko'ring.",
        data: {
          patient: newPatient,
        },
      };
    }
  }
  async update(id: string, payload: UpdatePatientDto) {
    const updatedPatient = await this.prisma.patient.update({
      where: { id },
      data: payload,
    });
    return{
        message:"success",
        data:updatedPatient
    }
  }
  async delete(id:string) {
    const deletedPatient=await this.prisma.patient.delete({
        where:{id}
    })
    return{
        message:"success",
        data:deletedPatient
    }
  }
}
