import { MongoQueryOption } from 'src/helper/DTO/mongoQuery.dto';
import { UsersService } from 'src/users/users.service';
import { MatchDto } from './match.dto';
import { MatchService } from './match.service';
export declare class MatchController {
    private userService;
    private matchService;
    constructor(userService: UsersService, matchService: MatchService);
    getMatch(optionals: MongoQueryOption, matchObject: MatchDto): Promise<any[]>;
}
