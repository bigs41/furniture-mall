/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose-delete/node_modules/mongoose" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
/// <reference types="mongoose-paginate-v2" />
import { DeleteUserDto, GetUserDto, OnlineLocationDto, UserDto } from './user.dto';
import { UsersService } from './users.service';
import { MinioClientService } from 'src/helper/minio-client/minio-client.service';
import { BufferedFile } from 'src/helper/minio-client/file.model';
import { QueryDto } from 'src/helper/DTO/query.dto';
export declare class UsersController {
    private userService;
    private minioClientService;
    constructor(userService: UsersService, minioClientService: MinioClientService);
    genPdf(req: any, res: any): Promise<any>;
    setRoles(body: any): any;
    setPermission(body: any): any;
    setRolePermission(body: any): any;
    getUserAll(req: any, query: QueryDto): any;
    count(): any;
    getUserOne(req: any, id: string): Promise<any[]>;
    get(req: any, id: string): Promise<any[]>;
    getUser(obj: GetUserDto, req: any): Promise<import("./users.schema").User[]>;
    setUser(_id: String, object: UserDto, req: any, image: BufferedFile): Promise<any>;
    save(id: any, object: any, req: any, image: BufferedFile): Promise<any>;
    deleteUser(object: DeleteUserDto): Promise<import("mongodb").DeleteResult>;
    onlineLocation(req: OnlineLocationDto): Promise<import("./users.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
