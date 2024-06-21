import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EspaciosService } from './espacios.service';
import { CreateEspacioDto } from './dto/create-espacio.dto';
import { UpdateEspacioDto } from './dto/update-espacio.dto';
import { Espacio } from './espacio.entity';

@Controller('espacios')
export class EspaciosController {
  constructor(private readonly espaciosService: EspaciosService) {}

  @Get()
  findAll(): Promise<Espacio[]> {
    return this.espaciosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Espacio> {
    return this.espaciosService.findOne(+id);
  }

  @Post()
  create(@Body() createEspacioDto: CreateEspacioDto): Promise<Espacio> {
    return this.espaciosService.create(createEspacioDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEspacioDto: UpdateEspacioDto): Promise<Espacio> {
    return this.espaciosService.update(+id, updateEspacioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.espaciosService.remove(+id);
  }
}