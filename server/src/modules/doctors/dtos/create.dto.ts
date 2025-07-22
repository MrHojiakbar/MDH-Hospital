import { ApiProperty } from "@nestjs/swagger";
import { doctorStatus, WorkType } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsIn, IsInt, IsString } from "class-validator";


export class DoctorCreateDto{

  @ApiProperty({type: 'string', example: 'UUID', required: true})
  @IsString()
  userId: string;

  @ApiProperty({type: 'string', example: 'bio yozish', required: true})
  @IsString()
  bio: string;

  @ApiProperty({type: 'number', example: 2, required: true})
  @Type(() => Number)
  @IsInt()
  experienceYears: number;

  @ApiProperty({enum: WorkType, description: 'Select one of the predefined work types', example: WorkType.DENTIST})
  @IsString()
  @IsEnum(WorkType)
  workType: WorkType;

  @ApiProperty({type: 'number', example: 1, required: true})
  @Type(() => Number)
  @IsInt()
  stars: number;

  @ApiProperty({type: 'number', example: 25, required: true})
  @Type(() => Number)
  @IsInt()
  roomNumber: number;

  @ApiProperty({enum: doctorStatus, description: 'Set the doctor status', required: true, example: doctorStatus.ACTIVE})
  @IsString()
  status: doctorStatus;
}