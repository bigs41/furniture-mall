import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    description: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    status: number;

    @ApiProperty()
    sort: number;

    @ApiProperty()
    category: string;

    @ApiProperty()
    tags: string[];

    @ApiProperty()
    attributes: any;

    @ApiProperty()
    options: any;

    @ApiProperty()
    variants: any;

    @ApiProperty()
    related: string[];
 }
