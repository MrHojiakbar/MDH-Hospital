import { BadRequestException, Injectable } from "@nestjs/common";
import { isUUID } from "class-validator";
import { PrismaService } from "src/prisma";
import { DoctorService } from "../doctors";

Injectable()
export class StatisticService {
    constructor(private readonly prisma:PrismaService,private doctorService: DoctorService){}


    async getAll() {
        const data = await this.prisma.statistic.findMany()
        const DoctorsId = (await this.doctorService.getAll()).data;
        console.log(data)
        return {
            message:'success',
            data:data,
            DoctorsId
        }
    }

    async getOne(Id:string){
        if(!isUUID(Id)){
            throw new BadRequestException('Wrong id format')
        }

        const data = await this.prisma.statistic.findUnique({
            where:{id:Id}
        })

        return {
            message:'success',
            data:data
        }
    }

    async CreateAndUpdate(){
        const DoctorsId = (await this.doctorService.getAll()).data;
        return DoctorsId
        
    }

    
    
}