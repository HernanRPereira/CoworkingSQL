import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspaciosController } from './espacios.controller';
import { EspaciosService } from './espacios.service';
import { Espacio } from './espacio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Espacio])],
  controllers: [EspaciosController],
  providers: [EspaciosService],
})
export class EspaciosModule {}