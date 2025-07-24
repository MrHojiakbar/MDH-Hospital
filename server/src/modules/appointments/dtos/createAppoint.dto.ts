import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAppointmentDto {
  
  @ApiProperty({type: 'string', example: 'doctorId', required: true})
  @IsString()
  doctorId: string;
}
