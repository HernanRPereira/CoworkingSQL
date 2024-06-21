import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsDate, IsOptional } from 'class-validator';

export class UpdateReservaDto {
  @ApiProperty({ description: 'El nuevo ID del usuario asociado a la reserva', required: false })
  @IsOptional()
  @IsInt({ message: 'El UsuarioID debe ser un número entero' })
  @IsPositive({ message: 'El UsuarioID debe ser un número positivo' })
  UsuarioID?: number;

  @ApiProperty({ description: 'El nuevo ID del espacio de trabajo asociado a la reserva', required: false })
  @IsOptional()
  @IsInt({ message: 'El EspacioID debe ser un número entero' })
  @IsPositive({ message: 'El EspacioID debe ser un número positivo' })
  EspacioID?: number;

  @ApiProperty({ description: 'El nuevo ID de la sesión asociada a la reserva', required: false })
  @IsOptional()
  @IsInt({ message: 'El SesionID debe ser un número entero' })
  @IsPositive({ message: 'El SesionID debe ser un número positivo' })
  SesionID?: number;

  @ApiProperty({ description: 'La nueva fecha de reserva', required: false })
  @IsOptional()
  @IsDate({ message: 'La FechaReserva debe ser una instancia válida de Date' })
  FechaReserva?: Date;
}