import { ApiProperty } from "@nestjs/swagger";
import { doctorStatus, WorkType } from "@prisma/client";
import { IsEnum, IsInt, IsString } from "class-validator";


export class DoctorUpdateDto{

  @ApiProperty({enum: WorkType, description: 'Select one of the predefined work types', example: WorkType.DENTIST, required: false})
  @IsString()
  @IsEnum(WorkType)
  workType: WorkType;

  @ApiProperty({type: 'number', example: 1, required: false})
  @IsInt()
  stars: number;

  @ApiProperty({type: 'number', example: 25, required: false})
  @IsInt()
  roomNumber: number;

  @ApiProperty({enum: doctorStatus, description: 'Set the doctor status', required: false, example: doctorStatus.ACTIVE,})
  @IsString()
  status: doctorStatus;
}