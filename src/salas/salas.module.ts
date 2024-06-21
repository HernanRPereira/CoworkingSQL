import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalasController } from './salas.controller';
import { SalasService } from './salas.service';
import { Sala } from './sala.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sala])],
  controllers: [SalasController],
  providers: [SalasService],
})
export class SalasModule {}