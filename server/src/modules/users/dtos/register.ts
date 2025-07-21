import { ApiProperty } from '@nestjs/swagger';
import { gender } from '@prisma/client';
import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    type: 'string',
    required: true,
    example: 'john@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'John Doe',
  })
  @IsString()
  @MinLength(6)
  fullname: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'john123',
  })
  @IsString()
  @MinLength(4)
  password: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: gender.male,
    enum: gender,
    enumName: 'gender',
  })
  @IsEnum(gender)
  gender: gender;

  @ApiProperty({
    type: 'string',
    required: true,
    example: '+998991234567',
  })
  @IsString()
  phoneNumber: string;
}
