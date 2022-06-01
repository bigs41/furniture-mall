import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  providers: [TasksService]
})
export class TasksModule {}
