import { ApiProperty } from '@nestjs/swagger';
import { AppointmentStatus } from '@prisma/client';
import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateAppointmentDto {

  @ApiProperty({type: 'string', example: 'userId', required: true})
  @IsString()
  userId: string;

  @ApiProperty({type: 'string', example: 'doctorId', required: true})
  @IsString()
  doctorId: string;

  @ApiProperty({type: 'string', example: 'scheduleId', required: true})
  @IsString()
  scheduleId: string;
}
