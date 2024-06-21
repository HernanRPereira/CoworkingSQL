import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reserva } from '../reservas/reserva.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  UsuarioID: number;

  @Column()
  Nombre: string;

  @Column()
  Correo: string;

  @Column()
  Telefono: string;

  @OneToMany(() => Reserva, reserva => reserva.UsuarioID)
  reservas: Reserva[];
}