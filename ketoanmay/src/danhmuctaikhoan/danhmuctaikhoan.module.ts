import { Module } from '@nestjs/common';
import { DanhmuctaikhoanController } from './danhmuctaikhoan.controller';
import { DanhmuctaikhoanService } from './danhmuctaikhoan.service';

@Module({
  controllers: [DanhmuctaikhoanController],
  providers: [DanhmuctaikhoanService]
})
export class DanhmuctaikhoanModule {}
