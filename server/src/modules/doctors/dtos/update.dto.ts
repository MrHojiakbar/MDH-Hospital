import { ApiProperty } from '@nestjs/swagger';
import { doctorStatus, WorkType } from '@prisma/client';
import { IsEnum, IsInt, IsString, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class DoctorUpdateDto {
  @ApiProperty({
    enum: WorkType,
    description: 'Select one of the predefined work types',
    example: WorkType.DENTIST,
    required: false,
  })
  @IsOptional()
  @IsEnum(WorkType)
  workType?: WorkType;

  @ApiProperty({
    type: 'string',
    example: '5',
    required: false,
    description: 'Integer number, even if string in multipart',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  stars?: number;

  @ApiProperty({ type: 'string', example: 'bio yozish', required: true })
  @IsString()
  bio: string;

  @Type(() => Number)
  @IsInt()
  experienceYears: number;

  @ApiProperty({
    type: 'string',
    example: '101',
    required: false,
    description: 'Room number (as string for multipart/form-data)',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  roomNumber?: number;

  @ApiProperty({
    enum: doctorStatus,
    example: doctorStatus.ACTIVE,
    description: 'Doctor status',
    required: false,
  })
  @IsOptional()
  @IsEnum(doctorStatus)
  status?: doctorStatus;
}
