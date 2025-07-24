import { Controller, Get, UseGuards } from "@nestjs/common";
import { StatisticService } from "./statistic.service";
import { Protected } from "src/decaratores";
import { CheckAuthGuard } from "src/guards";


@UseGuards(CheckAuthGuard)
@Controller('statistics')
export class StatisticController{
    constructor(private service:StatisticService){}

    @Protected(false)
    @Get('')
    async getAll(){
        return await this.service.getAll()
    }
}