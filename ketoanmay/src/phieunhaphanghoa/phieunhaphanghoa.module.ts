import { Module } from '@nestjs/common';
import { PhieunhaphanghoaController } from './phieunhaphanghoa.controller';
import { PhieunhaphanghoaService } from './phieunhaphanghoa.service';

@Module({
  controllers: [PhieunhaphanghoaController],
  providers: [PhieunhaphanghoaService]
})
export class PhieunhaphanghoaModule {}
