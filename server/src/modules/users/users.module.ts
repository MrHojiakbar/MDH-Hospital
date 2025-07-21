import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './strategy';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_SECRET_TIME,
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, GoogleStrategy],
})
export class UsersModule {}
