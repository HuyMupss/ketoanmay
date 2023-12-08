import { Module } from '@nestjs/common';
import { ChungtuketchuyenController } from './chungtuketchuyen.controller';
import { ChungtuketchuyenService } from './chungtuketchuyen.service';

@Module({
  controllers: [ChungtuketchuyenController],
  providers: [ChungtuketchuyenService]
})
export class ChungtuketchuyenModule {}
