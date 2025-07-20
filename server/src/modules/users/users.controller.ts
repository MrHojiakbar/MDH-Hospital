import { Body, Controller, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto, RegisterDto } from './dtos';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post('register')
  async register(@Body() payload: RegisterDto, @Res() res: Response) {
    return await this.service.rergister(payload, res);
  }

  @Post('login')
  async login(@Body() payload: LoginDto, @Res() res: Response) {
    return await this.service.login(payload, res);
  }
}
