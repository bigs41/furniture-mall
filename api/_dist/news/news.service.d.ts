import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { Model } from 'mongoose';
import { NewsDocument } from "./entities/news.schema";
export declare class NewsService {
    private readonly $NewsModel;
    constructor($NewsModel: Model<NewsDocument>);
    $model(model: any): any;
    create(createNewsDto: CreateNewsDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNewsDto: UpdateNewsDto): string;
    remove(id: number): string;
}
