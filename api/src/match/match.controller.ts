import { Body, Controller, Get, Query, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import _ from 'lodash';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MongoQueryOption } from 'src/helper/DTO/mongoQuery.dto';
import { ResponseFormat } from 'src/helper/interceptor/responseFromat.interceptor';
import { UsersService } from 'src/users/users.service';
import { MatchDto } from './match.dto';
import { MatchService } from './match.service';

@Controller('match')
@UseInterceptors(ResponseFormat)
@UseGuards(JwtAuthGuard)

export class MatchController {
    constructor(
        private userService: UsersService,
        private matchService: MatchService,
    ) { }

    @Get('getMatch')
    @UsePipes(new ValidationPipe({ transform: true }))
    async getMatch(@Query() optionals: MongoQueryOption, @Body() matchObject: MatchDto) {
        let query = await this.matchService.matchAggregation(matchObject, optionals)
        let ans = await this.userService.aggregation(query)
        return ans
    }
}
