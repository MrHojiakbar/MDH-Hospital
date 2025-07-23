import { ApiProperty } from '@nestjs/swagger';
import { dayOfWeek } from '@prisma/client';
import { IsDateString, IsEnum, IsString } from 'class-validator';

export class AddScheduleDto {
  @ApiProperty({
    type: 'string',
    enumName: 'dayOfWeek',
    enum: dayOfWeek,
    required: true,
    example: [
      dayOfWeek.Dushanba,
      dayOfWeek.Seshanba,
      dayOfWeek.Chorshanba,
      dayOfWeek.Juma,
    ],
  })
  @IsEnum(dayOfWeek)
  dayOfWeek: dayOfWeek[];

  @IsDateString()
  startTime: string;

  @IsDateString()
  endTime: string;
}
