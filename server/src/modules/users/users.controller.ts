import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto, RegisterDto } from './dtos';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post('register')
  async register(
    @Body() payload: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.service.register(payload, res);
  }

  @Post('login')
  async login(
    @Body() payload: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.service.login(payload, res);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async gooogle() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request & { user: any },
  ) {
    return await this.service.google(req.user.email, res);
  }

  @Get('me')
  async me(@Req() req: { userId: string }) {
    return await this.service.me(req.userId);
  }

  @Get('logout')
  async logout(@Res() res: Response) {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');

    res.status(200).send({
      message: 'Siz muvaffaqiyat bilan tizimdan chiqdingiz!',
    });
  }
}
