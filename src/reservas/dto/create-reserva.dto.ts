import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsNotEmpty, IsDate } from 'class-validator';

export class CreateReservaDto {
  @ApiProperty({ description: 'El ID del usuario que realiza la reserva' })
  @IsNotEmpty({ message: 'El UsuarioID es obligatorio' })
  @IsInt({ message: 'El UsuarioID debe ser un número entero' })
  @IsPositive({ message: 'El UsuarioID debe ser un número positivo' })
  UsuarioID: number;

  @ApiProperty({ description: 'El ID del espacio de trabajo reservado' })
  @IsNotEmpty({ message: 'El EspacioID es obligatorio' })
  @IsInt({ message: 'El EspacioID debe ser un número entero' })
  @IsPositive({ message: 'El EspacioID debe ser un número positivo' })
  EspacioID: number;

  @ApiProperty({ description: 'El ID de la sesión en la que se realiza la reserva' })
  @IsNotEmpty({ message: 'El SesionID es obligatorio' })
  @IsInt({ message: 'El SesionID debe ser un número entero' })
  @IsPositive({ message: 'El SesionID debe ser un número positivo' })
  SesionID: number;

  @ApiProperty({ description: 'La fecha en la que se realiza la reserva' })
  @IsNotEmpty({ message: 'La FechaReserva es obligatoria' })
  @IsDate({ message: 'La FechaReserva debe ser una instancia válida de Date' })
  FechaReserva: Date;
}
