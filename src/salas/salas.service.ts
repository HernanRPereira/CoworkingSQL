import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sala } from './sala.entity';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@Injectable()
export class SalasService {
  constructor(
    @InjectRepository(Sala)
    private salasRepository: Repository<Sala>,
  ) {}

  findAll(): Promise<Sala[]> {
    return this.salasRepository.find();
  }

  async findOne(id: number): Promise<Sala> {
    const sala = await this.salasRepository.findOne({ where: { SalaID: id } });
    if (!sala) {
      throw new NotFoundException(`Sala with ID ${id} not found`);
    }
    return sala;
  }

  create(createSalaDto: CreateSalaDto): Promise<Sala> {
    const sala = this.salasRepository.create(createSalaDto);
    return this.salasRepository.save(sala);
  }

  async update(id: number, updateSalaDto: UpdateSalaDto): Promise<Sala> {
    const sala = await this.findOne(id);
    Object.assign(sala, updateSalaDto);
    return this.salasRepository.save(sala);
  }

  async remove(id: number): Promise<void> {
    const sala = await this.findOne(id);
    await this.salasRepository.remove(sala);
  }
}