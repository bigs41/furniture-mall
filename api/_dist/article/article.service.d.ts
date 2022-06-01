import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Model } from 'mongoose';
import { ArticleDocument } from "./entities/article.schema";
export declare class ArticleService {
    private readonly $ArticleModel;
    constructor($ArticleModel: Model<ArticleDocument>);
    $model(model: any): any;
    create(createArticleDto: CreateArticleDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateArticleDto: UpdateArticleDto): string;
    remove(id: number): string;
}
