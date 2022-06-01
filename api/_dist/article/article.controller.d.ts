import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(createArticleDto: CreateArticleDto): any;
    findAll(query: QueryDto): any;
    countAll(query: any): any;
    findOne(id: string): any;
    save(id: string, input: any): Promise<any>;
    updateSort(id: string, sort: number, body: any): Promise<any>;
    remove(id: string): Promise<any>;
}
