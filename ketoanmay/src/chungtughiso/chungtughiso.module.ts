import { Module } from '@nestjs/common';
import { ChungtughisoController } from './chungtughiso.controller';
import { ChungtughisoService } from './chungtughiso.service';

@Module({
  controllers: [ChungtughisoController],
  providers: [ChungtughisoService]
})
export class ChungtughisoModule {}
