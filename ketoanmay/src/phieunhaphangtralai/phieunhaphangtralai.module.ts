import { Module } from '@nestjs/common';
import { PhieunhaphangtralaiController } from './phieunhaphangtralai.controller';
import { PhieunhaphangtralaiService } from './phieunhaphangtralai.service';

@Module({
  controllers: [PhieunhaphangtralaiController],
  providers: [PhieunhaphangtralaiService]
})
export class PhieunhaphangtralaiModule {}
