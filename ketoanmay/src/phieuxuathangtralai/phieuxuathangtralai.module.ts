import { Module } from '@nestjs/common';
import { PhieuxuathangtralaiController } from './phieuxuathangtralai.controller';
import { PhieuxuathangtralaiService } from './phieuxuathangtralai.service';

@Module({
  controllers: [PhieuxuathangtralaiController],
  providers: [PhieuxuathangtralaiService],
  exports: [PhieuxuathangtralaiService]
})
export class PhieuxuathangtralaiModule {}
