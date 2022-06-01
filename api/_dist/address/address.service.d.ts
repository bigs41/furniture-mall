/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose-delete/node_modules/mongoose" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose-paginate-v2" />
import { Model } from 'mongoose';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address, AddressDocument } from "./entities/address.schema";
export declare class AddressService {
    private readonly AddressModel;
    constructor(AddressModel: Model<AddressDocument>);
    create(createAddressDto: CreateAddressDto): Promise<Address & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    $model(): Model<AddressDocument, {}, {}, {}>;
    findOne(id: number): string;
    update(id: number, updateAddressDto: UpdateAddressDto): string;
    remove(id: number): string;
}
