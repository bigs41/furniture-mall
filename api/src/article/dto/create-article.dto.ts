import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto { 
    @ApiProperty({
        type: Object,
        example: {
            th: 'string',
            en: 'string'
        }
    })
    name: {
        th: string,
        en:string
    };
  
    @ApiProperty()
    sort: number;
  
    @ApiProperty({type:Object,
        example: {
            th: 'string',
            en: 'string'
        }})
    description: {
        th: string,
        en:string
    };
}
