import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EndpointsService } from './endpoints.service'; 
import { Sesion } from 'src/sesiones/sesion.entity'; 
import { Espacio } from 'src/espacios/espacio.entity'; 

@Controller('Endpoints')
export class EndpointsController {
  constructor(private readonly endpointsService: EndpointsService) { }

  // Endpoint para obtener espacios de trabajo disponibles en una sesión
  @Get(':idSesion/salas/:idSala/espacios-disponibles')
  getEspaciosDisponiblesEnSesion(
    @Param('idSesion') idSesion: string,
    @Param('idSala') idSala: string,
  ): Promise<Espacio[]> {
    return this.endpointsService.getEspaciosDisponiblesEnSesion(+idSesion, +idSala);
  }

  //Ver la lista de espacios de trabajo ocupados de una sala en una sesión x.
  @Get(':idSesion/salas/:idSala/espacios-ocupados')
  getEspaciosOcupadosEnSesion(
    @Param('idSesion') idSesion: string,
    @Param('idSala') idSala: string,
  ): Promise<Espacio[]> {
    return this.endpointsService.getEspaciosOcupadosEnSesion(+idSesion, +idSala);
  }

  //Ver las sesiones con orden por las más ocupadas.
  @Get('mas-ocupadas')
  getSesionesMasOcupadas(): Promise<Sesion[]> {
    return this.endpointsService.getSesionesMasOcupadas();
  }

  @Get('mas-disponibles')
  getSesionesMasDisponibles(): Promise<Sesion[]> {
    return this.endpointsService.getSesionesMasDisponibles();
  }

  @Get('usuario/:idUsuario/espacios')
  getEspaciosAsignadosAUsuario(@Param('idUsuario') idUsuario: string): Promise<Espacio[]> {
    return this.endpointsService.getEspaciosAsignadosAUsuario(+idUsuario);
  }

  @Get('sesion/:idSesion/espacios')
  getEspaciosAsignadosASesion(@Param('idSesion') idSesion: string): Promise<Espacio[]> {
    return this.endpointsService.getEspaciosAsignadosASesion(+idSesion);
  }
}
