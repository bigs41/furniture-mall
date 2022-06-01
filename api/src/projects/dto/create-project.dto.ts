import { ApiProperty } from '@nestjs/swagger';
export class CreateProjectDto {
    @ApiProperty({
        description: 'The name of the project',
    })
    name: string;

    @ApiProperty({
        required: true,
        description: 'link project coohom panorama',
    })
    uri: string;
    
    @ApiProperty({
        description: 'The description of the project',
    })
    description: string;

    @ApiProperty()
    type: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    status: boolean;

    @ApiProperty()
    sort: number;

    @ApiProperty()
    sellpricetotal: number;
    @ApiProperty()
    sellprice: number;
    @ApiProperty()
    stock: number;

    @ApiProperty()
    category: string;
}
