import { ProjectsService } from './projects.service';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class StylesController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(query: QueryDto): Promise<any>;
    findOne(id: string): Promise<any>;
    create(id: string, body: any): Promise<any>;
}
