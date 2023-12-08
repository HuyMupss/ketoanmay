import { Module } from '@nestjs/common';
import { ChungtughisoModule } from './chungtughiso/chungtughiso.module';
import { PrismaModule } from './prisma/prisma.module';

import { ChungtuketchuyenModule } from './chungtuketchuyen/chungtuketchuyen.module';
import { ChungtunganhangModule } from './chungtunganhang/chungtunganhang.module';
import { DanhmuchanghoaModule } from './danhmuchanghoa/danhmuchanghoa.module';
import { DanhmuctaikhoanModule } from './danhmuctaikhoan/danhmuctaikhoan.module';
import { DanhmuctaikhoancongnokhachhangModule } from './danhmuctaikhoancongnokhachhang/danhmuctaikhoancongnokhachhang.module';
import { PhieuchichitietModule } from './phieuchichitiet/phieuchichitiet.module';
import { PhieunhaphanghoaModule } from './phieunhaphanghoa/phieunhaphanghoa.module';
import { PhieunhaphangtralaiModule } from './phieunhaphangtralai/phieunhaphangtralai.module';
import { PhieuthuchitietModule } from './phieuthuchitiet/phieuthuchitiet.module';
import { PhieuxuathanghoaModule } from './phieuxuathanghoa/phieuxuathanghoa.module';
import { PhieuxuathangtralaiModule } from './phieuxuathangtralai/phieuxuathangtralai.module';
import { XemhangdaxuatModule } from './xemhangdaxuat/xemhangdaxuat.module';
import { XemhangtondanhapModule } from './xemhangtondanhap/xemhangtondanhap.module';
import { DanhmuckhachhangModule } from './danhmuckhachhang/danhmuckhachhang.module';
@Module({
  imports: [ChungtughisoModule,
            PrismaModule,
           ChungtuketchuyenModule,
           ChungtunganhangModule,
           DanhmuchanghoaModule, 
            DanhmuctaikhoanModule,
            DanhmuctaikhoancongnokhachhangModule,
            PhieuchichitietModule, 
            PhieunhaphanghoaModule, 
            PhieunhaphangtralaiModule,
            PhieuthuchitietModule,
            PhieuxuathanghoaModule, 
            PhieuxuathangtralaiModule,
            XemhangdaxuatModule,
            XemhangtondanhapModule,
            DanhmuckhachhangModule
          ],
  
})
export class AppModule {}
