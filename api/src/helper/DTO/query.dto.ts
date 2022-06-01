import { ApiProperty } from '@nestjs/swagger';

export class QueryDto { 
    @ApiProperty({
        description: 'page number',
        example:1
    })
    page: number;

    @ApiProperty()
    limit: number;

    @ApiProperty()
    orderBy: string;

    @ApiProperty()
    searchFields: Object[];

    @ApiProperty()
    search: string;
}
