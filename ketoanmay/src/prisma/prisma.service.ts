import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
constructor(){

    super({
        datasources: {
            db: {
                url:"sqlserver://localhost:1433;database=ketoanmay;user=sa;password=24052003Huy.;trustServerCertificate=true"
            }
        }
    })
}}
