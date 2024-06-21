import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sesion } from 'src/sesiones/sesion.entity'; 
import { Espacio } from 'src/espacios/espacio.entity';
import { Reserva } from 'src/reservas/reserva.entity';

@Injectable()
export class EndpointsService {
  constructor(
    @InjectRepository(Sesion)
    private sesionesRepository: Repository<Sesion>,
    @InjectRepository(Espacio)
    private espaciosRepository: Repository<Espacio>,
    @InjectRepository(Reserva)
    private reservasRepository: Repository<Reserva>,
  ) { }

  async getEspaciosDisponiblesEnSesion(idSesion: number, idSala: number): Promise<Espacio[]> {
    // Encuentra todos los espacios en la sala específica
    const espacios = await this.espaciosRepository.find({
      where: {
        SalaID: idSala,
        Disponible: true,
      },
    });

    // Encuentra todas las reservas de la sesión específica
    const reservas = await this.reservasRepository.find({
      where: {
        SesionID: idSesion,
      },
    });

    // Filtra los espacios que no están reservados para la sesión específica
    const espaciosReservados = reservas.map(reserva => reserva.EspacioID);
    const espaciosDisponibles = espacios.filter(espacio => !espaciosReservados.includes(espacio.EspacioID));

    return espaciosDisponibles;
  }

  async getEspaciosOcupadosEnSesion(idSesion: number, idSala: number): Promise<Espacio[]> {
    const reservas = await this.reservasRepository.find({
      where: {
        SesionID: idSesion,
      },
      relations: ['espacio'],
    });

    const espaciosOcupados = reservas
      .map(reserva => reserva.espacio)
      .filter(espacio => espacio.SalaID === idSala);

    return espaciosOcupados;
  }

  async getSesionesMasOcupadas(): Promise<Sesion[]> {
    const sesiones = await this.sesionesRepository.createQueryBuilder('sesion')
      .leftJoinAndSelect('sesion.reservas', 'reserva')
      .loadRelationCountAndMap('sesion.reservasCount', 'sesion.reservas')
      .orderBy('sesion.reservasCount', 'DESC')
      .getMany();
    return sesiones;
  }

  async getSesionesMasDisponibles(): Promise<Sesion[]> {
    const sesiones = await this.sesionesRepository.find({
      relations: ['reservas'],
    });

    const sesionesConEspaciosDisponibles = await Promise.all(sesiones.map(async sesion => {
      const espaciosTotales = await this.espaciosRepository.count();
      const espaciosReservados = await this.reservasRepository.count({
        where: { SesionID: sesion.SesionID },
      });
      return {
        ...sesion,
        espaciosDisponibles: espaciosTotales - espaciosReservados,
      };
    }));

    sesionesConEspaciosDisponibles.sort((a, b) => b.espaciosDisponibles - a.espaciosDisponibles);

    return sesionesConEspaciosDisponibles;
  }

  async getEspaciosAsignadosAUsuario(idUsuario: number): Promise<Espacio[]> {
    const reservas = await this.reservasRepository.find({
      where: { UsuarioID: idUsuario },
      relations: ['espacio'],
    });

    return reservas.map(reserva => reserva.espacio);
  }

  async getEspaciosAsignadosASesion(idSesion: number): Promise<Espacio[]> {
    const reservas = await this.reservasRepository.find({
      where: { SesionID: idSesion },
      relations: ['espacio'],
    });

    return reservas.map(reserva => reserva.espacio);
  }
}