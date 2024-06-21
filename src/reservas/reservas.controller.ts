import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './reserva.entity';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Get()
  findAll(): Promise<Reserva[]> {
    return this.reservasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Reserva> {
    return this.reservasService.findOne(+id);
  }

  @Post()
  create(@Body() createReservaDto: CreateReservaDto): Promise<Reserva> {
    return this.reservasService.create(createReservaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateReservaDto: UpdateReservaDto): Promise<Reserva> {
    return this.reservasService.update(+id, updateReservaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.reservasService.remove(+id);
  }
}