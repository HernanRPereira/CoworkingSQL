import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SesionesController } from './sesiones.controller';
import { SesionesService } from './sesiones.service';
import { Sesion } from './sesion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sesion])],
  controllers: [SesionesController],
  providers: [SesionesService],
})
export class SesionesModule {}