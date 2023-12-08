import { IsDate, IsOptional, IsString } from "class-validator"
import { IsFloat } from "../../chungtughiso/dto/decorator.dto"

export class UpdateHangHoaDTO {
    @IsString()
    @IsOptional()
    cTenHang? :string 

    @IsString()
    @IsOptional()
    cNhomHang?: string

    @IsString()
    @IsOptional()
    cDonViTinh? : string

    @IsFloat()
    @IsOptional()
    nSoLuongTonDau?: number

    @IsFloat()
    @IsOptional()
    nThanhTienTonDau?: number

    @IsDate()
    @IsOptional()
    dNgayTonDau?: Date
}