import { UsersService } from './users.service';
import { MinioClientService } from 'src/helper/minio-client/minio-client.service';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class PermissionController {
    private userService;
    private minioClientService;
    constructor(userService: UsersService, minioClientService: MinioClientService);
    getRoles(req: any, query: QueryDto): Promise<any>;
    getRole(id: string, req: any): Promise<any>;
    updatePermission(id: string, body: any): Promise<any>;
    deletePermission(id: string): Promise<any>;
}
