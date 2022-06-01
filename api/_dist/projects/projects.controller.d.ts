import { ProjectsService } from './projects.service';
import { UpdateProjectDto } from './dto/update-project.dto';
import { MinioClientService } from 'src/helper/minio-client/minio-client.service';
import { BufferedFile } from 'src/helper/minio-client/file.model';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class ProjectsController {
    private readonly projectsService;
    private readonly minioClientService;
    constructor(projectsService: ProjectsService, minioClientService: MinioClientService);
    findAll(query: QueryDto): any;
    count(): any;
    findOne(id: string): any;
    upload(image: BufferedFile, req: any): Promise<any>;
    delete(req: any): Promise<any>;
    save(id: string, updateProjectDto: UpdateProjectDto): any;
    remove(id: string): any;
}
