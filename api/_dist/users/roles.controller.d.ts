import { UsersService } from './users.service';
import { MinioClientService } from 'src/helper/minio-client/minio-client.service';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class RolesController {
    private userService;
    private minioClientService;
    constructor(userService: UsersService, minioClientService: MinioClientService);
    setRolePermission(body: any): any;
    setRoles(body: any): any;
    getRoles(req: any, query: QueryDto): Promise<any>;
    getRole(id: string, req: any): Promise<any>;
    saveRoles(body: any, id: string): Promise<any>;
}
