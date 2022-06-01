import { ProjectsService } from './projects.service';
import { MinioClientService } from 'src/helper/minio-client/minio-client.service';
import { BufferedFile } from 'src/helper/minio-client/file.model';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class RoomsController {
    private readonly projectsService;
    private readonly minioClientService;
    constructor(projectsService: ProjectsService, minioClientService: MinioClientService);
    findAll(query: QueryDto): Promise<any>;
    findOne(id: string): Promise<any>;
    upload(image: BufferedFile, req: any): Promise<any>;
    delete(req: any): Promise<any>;
    create(id: string, body: any): Promise<any>;
}
