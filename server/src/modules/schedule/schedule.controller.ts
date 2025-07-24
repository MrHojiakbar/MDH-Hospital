import { Body, Controller, Post, Req } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { AddScheduleDto } from './dtos';
import { Protected, Roles } from 'src/decaratores';
import { userRole } from '@prisma/client';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly service: ScheduleService) {}

  @Post('add')
  @Protected(true)
  @Roles([userRole.doctor, userRole.admin, userRole.user, userRole.manager])
  async add(
    @Body() payload: AddScheduleDto,
    @Req() req: Request & { userId: string },
  ) {
    return await this.service.addSchedule(payload, req.userId);
  }
}
