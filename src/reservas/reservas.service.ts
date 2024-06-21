import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(Reserva)
    private reservasRepository: Repository<Reserva>,
  ) {}

  findAll(): Promise<Reserva[]> {
    return this.reservasRepository.find();
  }

  async findOne(id: number): Promise<Reserva> {
    const reserva = await this.reservasRepository.findOne({ where: { ReservaID: id } });
    if (!reserva) {
      throw new NotFoundException(`Reserva with ID ${id} not found`);
    }
    return reserva;
  }

  create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    const reserva = this.reservasRepository.create(createReservaDto);
    return this.reservasRepository.save(reserva);
  }

  async update(id: number, updateReservaDto: UpdateReservaDto): Promise<Reserva> {
    const reserva = await this.findOne(id);
    Object.assign(reserva, updateReservaDto);
    return this.reservasRepository.save(reserva);
  }

  async remove(id: number): Promise<void> {
    const reserva = await this.findOne(id);
    await this.reservasRepository.remove(reserva);
  }
}