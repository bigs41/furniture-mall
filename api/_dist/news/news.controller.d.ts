import { NewsService } from './news.service';
import { UpdateNewsDto } from './dto/update-news.dto';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    create(createNewsDto: UpdateNewsDto): any;
    countAll(query: any): any;
    findAll(query: QueryDto): any;
    findOne(id: string): any;
    save(id: string, updateNewsDto: UpdateNewsDto): Promise<any>;
    updateSort(id: string, sort: number, body: any): Promise<any>;
    remove(id: string): Promise<any>;
}
