import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from 'src/Users/user.entity'; 
import { Espacio } from 'src/espacios/espacio.entity'; 
import { Sesion } from 'src/sesiones/sesion.entity'; 

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  ReservaID: number;

  @Column()
  UsuarioID: number;

  @Column()
  EspacioID: number;

  @Column()
  SesionID: number;

  @Column()
  FechaReserva: Date;

  @ManyToOne(() => Usuario, usuario => usuario.reservas)
  usuario: Usuario;

  @ManyToOne(() => Espacio, espacio => espacio.reservas)
  espacio: Espacio;

  @ManyToOne(() => Sesion, sesion => sesion.reservas)
  sesion: Sesion;
}