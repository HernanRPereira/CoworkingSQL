import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Sala } from 'src/salas/sala.entity'; 
import { Reserva } from 'src/reservas/reserva.entity'; 

@Entity()
export class Espacio {
  @PrimaryGeneratedColumn()
  EspacioID: number;

  @Column()
  SalaID: number;

  @Column()
  Fila: number;

  @Column()
  Columna: number;

  @Column()
  Disponible: boolean;

  @ManyToOne(() => Sala, sala => sala.espacios)
  sala: Sala;

  @OneToMany(() => Reserva, reserva => reserva.espacio)
  reservas: Reserva[];
}