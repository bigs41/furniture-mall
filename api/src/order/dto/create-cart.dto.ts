import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto { 
    @ApiProperty()
    user: string;
    
    @ApiProperty()
    product: string;

    @ApiProperty()
    code: string;

    @ApiProperty()
    id: string;
    
    @ApiProperty()
    quantity: number;

    @ApiProperty()
    type:string;

    @ApiProperty()
    json: string;
}