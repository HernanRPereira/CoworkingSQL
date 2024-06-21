import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sesion } from './sesion.entity';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';

@Injectable()
export class SesionesService {
  constructor(
    @InjectRepository(Sesion)
    private sesionesRepository: Repository<Sesion>,
  ) {}

  findAll(): Promise<Sesion[]> {
    return this.sesionesRepository.find();
  }

  async findOne(id: number): Promise<Sesion> {
    const sesion = await this.sesionesRepository.findOne({ where: { SesionID: id } });
    if (!sesion) {
      throw new NotFoundException(`Sesion with ID ${id} not found`);
    }
    return sesion;
  }

  create(createSesionDto: CreateSesionDto): Promise<Sesion> {
    const sesion = this.sesionesRepository.create(createSesionDto);
    return this.sesionesRepository.save(sesion);
  }

  async update(id: number, updateSesionDto: UpdateSesionDto): Promise<Sesion> {
    const sesion = await this.findOne(id);
    Object.assign(sesion, updateSesionDto);
    return this.sesionesRepository.save(sesion);
  }

  async remove(id: number): Promise<void> {
    const sesion = await this.findOne(id);
    await this.sesionesRepository.remove(sesion);
  }
}