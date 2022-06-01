import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto { 
    @ApiProperty()
    name: string;
    @ApiProperty()
    code: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    order: [
        string
    ];
    @ApiProperty()
    user: string;
    
    @ApiProperty()
    products: [string];
}