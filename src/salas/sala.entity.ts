import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Espacio } from '../espacios/espacio.entity';

@Entity()
export class Sala {
  @PrimaryGeneratedColumn()
  SalaID: number;

  @Column()
  Nombre: string;

  @Column()
  Ubicacion: string;

  @Column()
  NumeroFilas: number;

  @Column()
  NumeroColumnas: number;

  @OneToMany(() => Espacio, espacio => espacio.SalaID)
  espacios: Espacio[];
}