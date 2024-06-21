import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SesionesService } from './sesiones.service';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { Sesion } from './sesion.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sesiones')
@Controller('sesiones')
export class SesionesController {
  constructor(private readonly sesionesService: SesionesService) { }

  @Get()
  findAll(): Promise<Sesion[]> {
    return this.sesionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Sesion> {
    return this.sesionesService.findOne(+id);
  }

  @Post()
  create(@Body() createSesionDto: CreateSesionDto): Promise<Sesion> {
    return this.sesionesService.create(createSesionDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSesionDto: UpdateSesionDto): Promise<Sesion> {
    return this.sesionesService.update(+id, updateSesionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.sesionesService.remove(+id);
  }

}

