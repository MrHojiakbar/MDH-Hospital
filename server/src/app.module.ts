import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma';
import { ScheduleModule, UsersModule } from './modules';
import { DoctorModule } from './modules';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { APP_GUARD } from '@nestjs/core';
import { CheckAuthGuard, CheckRoleGuard } from './guards';
import { JwtHelper } from './helpers';
import { AmbulanceModule } from './modules/ambulance/ambulance.module';
import { PatientModule } from './modules/patient/patient.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    ServeStaticModule.forRoot({
      rootPath: path.join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),

    PrismaModule,
    UsersModule,
    DoctorModule,
    AmbulanceModule,
    ScheduleModule,
    PatientModule
  ],

  providers: [
    JwtHelper,
    {
      provide: APP_GUARD,
      useClass: CheckAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: CheckRoleGuard,
    },
  ],
})
export class AppModule {}
