import { ApiProperty } from '@nestjs/swagger';
import { dayOfWeek } from '@prisma/client';
import { IsArray, ArrayNotEmpty, IsEnum, IsString } from 'class-validator';

export class AddScheduleDto {
  @ApiProperty({
    type: 'array',
    items: { type: 'string' },
    example: [dayOfWeek.Dushanba, dayOfWeek.Seshanba, dayOfWeek.Juma],
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(dayOfWeek, { each: true })
  dayOfWeek: dayOfWeek[];

  @ApiProperty({
    type: 'string',
    example: '09:00',
    required: true,
  })
  @IsString()
  startTime: string;

  @ApiProperty({
    type: 'string',
    example: '18:00',
    required: true,
  })
  @IsString()
  endTime: string;
}
