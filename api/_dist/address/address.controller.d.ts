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
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(createAddressDto: CreateAddressDto): Promise<import("./entities/address.schema").Address & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): Promise<(import("./entities/address.schema").Address & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): string;
    update(id: string, updateAddressDto: UpdateAddressDto): string;
    remove(id: string): string;
}
