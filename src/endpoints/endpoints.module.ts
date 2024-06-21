import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sesion } from 'src/sesiones/sesion.entity'; 
import { Espacio } from 'src/espacios/espacio.entity';
import { Reserva } from 'src/reservas/reserva.entity';
import { EndpointsController } from './endpoints.controller';
import { EndpointsService } from './endpoints.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sesion, Espacio, Reserva])],
  controllers: [EndpointsController],
  providers: [EndpointsService],
})
export class endpointsModule {}