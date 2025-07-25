import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
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
    example: 'john123',
  })
  @IsString()
  @MinLength(4)
  password: string;
}
