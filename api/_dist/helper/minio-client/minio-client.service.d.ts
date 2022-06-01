import { MinioService } from 'nestjs-minio-client';
import { BufferedFile } from './file.model';
export declare class MinioClientService {
    private readonly minio;
    private readonly logger;
    private readonly baseBucket;
    get client(): Minio.Client;
    constructor(minio: MinioService);
    upload(file: BufferedFile, hashedFileName?: string, baseBucket?: string): Promise<{
        url: string;
    }>;
    delete(objetName: string, baseBucket?: string): Promise<any>;
}
