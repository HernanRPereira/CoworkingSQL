import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reserva } from '../reservas/reserva.entity';

@Entity()
export class Sesion {
  @PrimaryGeneratedColumn()
  SesionID: number;

  @Column()
  Fecha: Date;

  @Column()
  HoraInicio: string;

  @Column()
  HoraFin: string;

  @OneToMany(() => Reserva, reserva => reserva.SesionID)
  reservas: Reserva[];
}