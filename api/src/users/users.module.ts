import { Module } from '@nestjs/common';
import { User, UserSchema } from './users.schema';
import { Roles, RolesSchema } from './roles.schema';
import { Permission, PermissionSchema } from './permission.schema';
import { RolePermission, RolePermissionSchema } from './rolePermission.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RolesController } from './roles.controller';
import { PermissionController } from './permission.controller';
import { MinioClientModule } from 'src/helper/minio-client/minio-client.module';


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Roles.name, schema: RolesSchema },
            { name: Permission.name, schema: PermissionSchema },
            { name: RolePermission.name, schema: RolePermissionSchema },
        ]),
        MinioClientModule
    ],
    providers: [UsersService],
    exports: [UsersService],
    controllers: [UsersController,RolesController,PermissionController]
})
export class UsersModule {
}
