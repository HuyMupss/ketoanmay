import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { cSoChungTu, dNgayChungTu, selectChungTu } from '../select';
import { getChungTuLasted } from '../getchungtulasted';
import { soChungTuNext } from '../getChungTuNext';
import { InsertChungTuGhiSoChiTietDTO, InsertChungTuGhiSoDTO, UpdateChungTuGhiSoChiTietDTO, UpdateChungTuGhiSoDTO } from './dto';
import { convertMaChungTu } from '../convert.sochungtu.ts';
@Injectable()
export class ChungtughisoService {
    constructor(private prismaService: PrismaService) { }

    async getAll() {
        try {
            return await this.prismaService.tChungTuGhiSo.findMany({
                include: {
                    tChungTuGhiSoChiTiet: true
                }
            })
        } catch (error) {
            throw new ForbiddenException(`Getting all chungtughiso error ${error}`);
        }
    }

    async getChungTuGhiSoByMaChungTu(maChungTu: string) {
        try {
            const machungtuConfig = convertMaChungTu(maChungTu)
            return await this.prismaService.tChungTuGhiSo.findUnique({
                where: {
                    cMaChungTu: machungtuConfig
                },
                include: {
                    tChungTuGhiSoChiTiet: true
                }
            })
        } catch (error) {
            throw new ForbiddenException(`Getting a record chungtughiso error ${error}`)
        }
        
    }
    async getChungTuGhiSo() {
        try {
            const listChungTu = await this.prismaService.tChungTuGhiSo.findMany({
                select: selectChungTu,
                orderBy: [
                    { dNgayChungTu },
    
                    { cSoChungTu }
                ]
            })
            const chungTuLast = getChungTuLasted(listChungTu)
            const chungTu = {
                listChungTu,
                chungTuLast
            }
            return chungTu
        } catch (error) {
            throw new ForbiddenException(`Getting chungtughiso  error ${error}`)
        }
        
    }
    async soChungTuGhiSoNext() {
        try {
            return soChungTuNext((await this.getChungTuGhiSo()).chungTuLast)
        } catch (error) {
            throw new ForbiddenException(`Getting so chungtughiso next error ${error}`)
        }
    }

    async createdChungTuGhiSo(chungTuGhiSoData: InsertChungTuGhiSoDTO, chungTuGhiSoChiTietData: InsertChungTuGhiSoChiTietDTO) {
        const maxId = await this.prismaService.tChungTuGhiSoChiTiet.findMany({
                            orderBy: {
                                nMaSo: 'desc'
                            },
                            take: 1
                        })
                        const idNext = maxId[0].nMaSo+1
        try {
            const chungTuNew = await this.prismaService.tChungTuGhiSo.create({
                data: {
                    ...chungTuGhiSoData,
                    tChungTuGhiSoChiTiet: {
                        create: {
                            ...chungTuGhiSoChiTietData,
                            nMaSo: idNext
                            
                        }
                    }
                },
                include: {
                    tChungTuGhiSoChiTiet: true
                }
            })
            return {
                message: "Created Successfully",
                chungTuNew
            }
        } catch (error) { 
            throw new ForbiddenException(`Creating a new chungtu error ${error}`)
        }

    }

    async deletedChungTuGhiSo(machungtu: string) {
        try {
            const machungtuConfig = convertMaChungTu(machungtu)
            const existingChungTu = await this.getChungTuGhiSoByMaChungTu(machungtu)
            if(!existingChungTu) {
                throw new NotFoundException(`Chungtu have cMaChungTu ${machungtuConfig} not found`)
            }
            if(existingChungTu?.tChungTuGhiSoChiTiet) {
                await this.prismaService.tChungTuGhiSoChiTiet.deleteMany({
                    where: {cMaChungTu: machungtuConfig} //thêm vào
                })//xoá hết relationship
            }
            await this.prismaService.tChungTuGhiSo.delete({ 
                where:{cMaChungTu: machungtuConfig}
            })//xoá tb where machungtu
            return {
                message : "Deleted Successfully"
            }
        } catch (error) {
            throw new ForbiddenException(`Error deleting chungtughiso: ${error}`); 
        }

    }
    async updatedChungTuGhiSo(
        maChungTu: string,
        chungTuGhiSoData: UpdateChungTuGhiSoDTO,
    ) {
        const machungtuConfig = convertMaChungTu(maChungTu)
        const existingChungTu = await this.prismaService.tChungTuGhiSo.findUnique({
            where: {cMaChungTu: machungtuConfig}
        });
        if (!existingChungTu) {
            throw new NotFoundException(`ChungTu with id ${machungtuConfig} not found`);
        }
        try {

            const chungtuAfterUpdated = await this.prismaService.tChungTuGhiSo.update({
                where: { cMaChungTu: machungtuConfig },
                data: {
                    ...chungTuGhiSoData, 
                }
            })
            return {
                message: "Updated Successfully!!!",
                chungtuAfterUpdated
            }

        } catch (error) {
            throw new ForbiddenException(`Error updating data: ${error}`);
        }
        //localhost:3000/chungtughiso/updatedchungtughiso/GS-001-11-23-11-23?maso=64 ?maso=64 là maso khi truyền vào
    }
    async updatedChungTuGhiSoChiTiet(
        maSoChungTuChiTiet : number,
        maChungTu: string,
        chungTuGhiSoChiTietData: UpdateChungTuGhiSoChiTietDTO
    ) {
        const machungtuConfig = convertMaChungTu(maChungTu)
        const existingChungTu = await this.prismaService.tChungTuGhiSo.findUnique({
            where: {cMaChungTu: machungtuConfig}
        });
        if (!existingChungTu) {
            throw new NotFoundException(`ChungTu with id ${machungtuConfig} not found`);
        }
        try {
            const chungtuAfterUpdated = await this.prismaService.tChungTuGhiSo.update({
                where: { cMaChungTu: machungtuConfig },
                data: {
                    tChungTuGhiSoChiTiet: {
                        update: {
                            where: {nMaSo: maSoChungTuChiTiet},
                            data:{...chungTuGhiSoChiTietData}
                        }
                    }
                }
            })
            return {
                message: "Updated Successfully!!!",
                chungtuAfterUpdated
            }
        } catch (error) {
            throw new ForbiddenException(`Error updating data: ${error}`);
        }
    }

}
