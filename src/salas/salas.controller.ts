import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SalasService } from './salas.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { Sala } from './sala.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('salas')
@Controller('salas')
export class SalasController {
  constructor(private readonly salasService: SalasService) {}

  @Get()
  findAll(): Promise<Sala[]> {
    return this.salasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Sala> {
    return this.salasService.findOne(+id);
  }

  @Post()
  create(@Body() createSalaDto: CreateSalaDto): Promise<Sala> {
    return this.salasService.create(createSalaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSalaDto: UpdateSalaDto): Promise<Sala> {
    return this.salasService.update(+id, updateSalaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.salasService.remove(+id);
  }
}