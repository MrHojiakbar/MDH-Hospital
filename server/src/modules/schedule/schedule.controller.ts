import { Body, Controller, Post, Req } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { AddScheduleDto } from './dtos';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly service: ScheduleService) {}

  @Post('add')
  async add(
    @Body() payload: AddScheduleDto,
    @Req() req: Request & { userId: string },
  ) {
    await this.service.addSchedule(payload, req.userId);
  }
}
