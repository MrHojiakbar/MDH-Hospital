import { ApiProperty } from '@nestjs/swagger';
import { WorkType } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class GetByTypeDto {
  @ApiProperty({
    enum: WorkType,
    description: 'Select one of the predefined work types',
    example: WorkType.DENTIST,
    required: true,
  })
  @IsString()
  @IsEnum(WorkType)
  workType: WorkType;
}
