import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address, AddressDocument } from "./entities/address.schema";
import * as _ from 'lodash';
const collect = require('collect.js');
@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name) private readonly AddressModel: Model<AddressDocument>,
  ) {}
  async create(createAddressDto: CreateAddressDto) {
    return await this.AddressModel.create(createAddressDto);
  }
  
  $model() {
    return this.AddressModel;
  }
  findOne(id: number) {
    return `This action returns a #${id} Address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} Address`;
  }

  remove(id: number) {
    return `This action removes a #${id} Address`;
  }
}
