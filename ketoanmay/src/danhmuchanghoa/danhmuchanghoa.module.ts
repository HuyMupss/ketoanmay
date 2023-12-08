import { Module } from '@nestjs/common';
import { DanhmuchanghoaController } from './danhmuchanghoa.controller';
import { DanhmuchanghoaService } from './danhmuchanghoa.service';

@Module({
  controllers: [DanhmuchanghoaController],
  providers: [DanhmuchanghoaService]
})
export class DanhmuchanghoaModule {}
