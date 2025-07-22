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
import { Protected, Roles } from 'src/decaratores';
import { userRole } from '@prisma/client';

@Controller('auth')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post('register')
  @Protected(false)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  async register(
    @Body() payload: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.service.register(payload, res);
  }

  @Post('login')
  @Protected(false)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  async login(
    @Body() payload: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.service.login(payload, res);
  }

  @Get('google')
  @Protected(false)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  @UseGuards(AuthGuard('google'))
  async gooogle() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  @Protected(false)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  async googleCallback(
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request & { user: any },
  ) {
    return await this.service.google(req.user.email, res);
  }

  @Get('me')
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  async me(@Req() req: { userId: string }) {
    return await this.service.me(req.userId);
  }

  @Get('logout')
  @Protected(true)
  @Roles([userRole.admin, userRole.doctor, userRole.manager, userRole.user])
  async logout(@Res() res: Response) {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.redirect(`${process.env.CORS_ORIGINS}/login`);
  }
}
