import { ApiProperty } from "@nestjs/swagger";
import { patientStatus } from "@prisma/client";
import { IsEnum, IsOptional, IsString } from "class-validator";

export class CreatePatientDto{
    @ApiProperty({type:'string',example:patientStatus.PENDING})
    @IsEnum(patientStatus)
    @IsOptional()
    status:patientStatus;

    @ApiProperty({type:'string',example:'latitude:342342,lajnajsj:98236432'})
    @IsString()
    location:string;
}