import { ApiProperty } from "@nestjs/swagger";
import { doctorStatus, WorkType } from "@prisma/client";
import { IsEnum, IsInt, IsString } from "class-validator";


export class DoctorCreateDto{

  @ApiProperty({type: 'string', example: 'UUID', required: true})
  @IsString()
  userId: string;

  @ApiProperty({enum: WorkType, description: 'Select one of the predefined work types', example: WorkType.DENTIST})
  @IsString()
  @IsEnum(WorkType)
  workType: WorkType;

  @ApiProperty({type: 'number', example: 1, required: true})
  @IsInt()
  stars: number;

  @ApiProperty({type: 'number', example: 25, required: true})
  @IsInt()
  roomNumber: number;

  @ApiProperty({enum: doctorStatus, description: 'Set the doctor status', required: true, example: doctorStatus.ACTIVE})
  @IsString()
  status: doctorStatus;
}