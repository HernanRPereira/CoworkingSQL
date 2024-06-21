import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Espacio } from './espacio.entity';
import { CreateEspacioDto } from './dto/create-espacio.dto';
import { UpdateEspacioDto } from './dto/update-espacio.dto';

@Injectable()
export class EspaciosService {
  constructor(
    @InjectRepository(Espacio)
    private espaciosRepository: Repository<Espacio>,
  ) {}

  findAll(): Promise<Espacio[]> {
    return this.espaciosRepository.find();
  }

  async findOne(id: number): Promise<Espacio> {
    const espacio = await this.espaciosRepository.findOne({ where: { EspacioID: id } });
    if (!espacio) {
      throw new NotFoundException(`Espacio with ID ${id} not found`);
    }
    return espacio;
  }

  create(createEspacioDto: CreateEspacioDto): Promise<Espacio> {
    const espacio = this.espaciosRepository.create(createEspacioDto);
    return this.espaciosRepository.save(espacio);
  }

  async update(id: number, updateEspacioDto: UpdateEspacioDto): Promise<Espacio> {
    const espacio = await this.findOne(id);
    Object.assign(espacio, updateEspacioDto);
    return this.espaciosRepository.save(espacio);
  }

  async remove(id: number): Promise<void> {
    const espacio = await this.findOne(id);
    await this.espaciosRepository.remove(espacio);
  }
}