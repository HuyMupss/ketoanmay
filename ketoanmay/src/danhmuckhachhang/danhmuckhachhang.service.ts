import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InsertDanhMucKhachHangDTO, UpdateDanhMucKhachHangDTO } from './dto';


@Injectable()
export class DanhmuckhachhangService {
    constructor(private prismaService: PrismaService) {
    }
    async getAll(){
        try {
            return await this.prismaService.tDanhMucKhachHang.findMany();

        } catch (error) {
            throw new ForbiddenException(`Getting all khachhang error ${error}`)
            
        }
    }
    async getDanhMucKhachHangByMaKhachHang(cMaKhachHang:string){
        try {
            return await this.prismaService.tDanhMucKhachHang.findUnique({
                where: {
                    cMaKhachHang
                }
            })
        } catch (error) {
            throw new ForbiddenException(`Getting khachhang by MaKhachHang error ${error}`)
        }
    }
    async createKhachHang(insertKhachHangData: InsertDanhMucKhachHangDTO){
        try {
            const newKhachHang =await this.prismaService.tDanhMucKhachHang.create({
                data:{...insertKhachHangData}
            })
            return {
                message: 'Add KhachHang Successfully', 
                newKhachHang
            }
        } catch (error) {
            throw new ForbiddenException(`Create a new khachhang error ${error}`)
        }
    }
    async updateKhachHang(updateKhachHangData:UpdateDanhMucKhachHangDTO,cMaKhachHang:string){
        try {
            const KhachHangAfterUpdate = await this.prismaService.tDanhMucKhachHang.update({
                where:{cMaKhachHang },
                data:{...updateKhachHangData}
            })
            return {
                message: 'Update KhachHang Successfully',
                KhachHangAfterUpdate
            }
        }catch (error) {
            throw new ForbiddenException(`Updating KhachHang error ${error}`)
        }
    }
    async deleteKhachHang(cMaKhachHang:string) {
        try {
            const KhachHangDeleted = await this.prismaService.tDanhMucKhachHang.delete({
                where:{cMaKhachHang}
            })
            return {
                message: 'Delete KhachHang Successfully',
                KhachHangDeleted
            }
        }catch (error) {
            throw new ForbiddenException(`Deleting KhachHang error ${error}`)
        }
    }
   
}