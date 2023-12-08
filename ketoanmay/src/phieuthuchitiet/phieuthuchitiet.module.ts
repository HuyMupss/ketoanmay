import { Module } from '@nestjs/common';
import { PhieuthuchitietController } from './phieuthuchitiet.controller';
import { PhieuthuchitietService } from './phieuthuchitiet.service';

@Module({
  controllers: [PhieuthuchitietController],
  providers: [PhieuthuchitietService]
})
export class PhieuthuchitietModule {}
