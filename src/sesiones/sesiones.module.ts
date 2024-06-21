import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SesionesController } from './sesiones.controller';
import { SesionesService } from './sesiones.service';
import { Sesion } from './sesion.entity';
import { Espacio } from 'src/espacios/espacio.entity';
import { Reserva } from 'src/reservas/reserva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sesion, Espacio, Reserva])],
  controllers: [SesionesController],
  providers: [SesionesService],
})
export class SesionesModule {}