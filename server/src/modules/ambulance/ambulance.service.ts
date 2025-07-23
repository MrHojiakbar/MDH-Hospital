import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma';
import { CreateAmbulance } from './dtos/CreateAmbulance.dto';
import { UpdateAmbulance } from './dtos/UpdateAmbulance.dto';

@Injectable()
export class AmbulanceService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const allAmbulance = await this.prisma.ambulance.findMany();
    return {
      message: 'success',
      count: allAmbulance.length,
      data: allAmbulance,
    };
  }

  async getById(id) {
    const ambulance = await this.prisma.ambulance.findUnique({ where: { id } });
    return {
      message: 'success',
      data: ambulance,
    };
  }

  async create(payload: CreateAmbulance) {
    const findAmbulance = await this.prisma.ambulance.findFirst({
      where: { phoneNumber: payload.phoneNumber },
    });
    if (findAmbulance) {
      throw new ConflictException('Bunday moshina raqamli Ambulance mavjud!!!');
    }
    const newAmbulance = await this.prisma.ambulance.create({ data: payload });
    return {
      message: 'success',
      data: newAmbulance,
    };
  }
  async upadte(id: string, payload: UpdateAmbulance) {
    const findAmbulance = await this.prisma.ambulance.findUnique({
      where: { id },
    });
    if (!findAmbulance) {
      throw new ConflictException('Bu id ga ega Ambulance mavjud emas!!!');
    }
    const updatedAmbulnace = await this.prisma.ambulance.update({
      where: { id },
      data: payload,
    });
    return {
        message:"success",
        data:updatedAmbulnace
    }
  }
  async delete(id:string) {
    const deletedAmbulance=await this.prisma.ambulance.delete({where:{id}})
    return {
        message:"success",
        data:deletedAmbulance
    }
  }
}
