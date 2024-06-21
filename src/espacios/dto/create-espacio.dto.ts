import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsBoolean, IsPositive, Min } from 'class-validator';

export class CreateEspacioDto {
  @ApiProperty({ description: 'El ID de la sala a la que pertenece el espacio' })
  @IsInt({ message: 'El SalaID debe ser un número entero' })
  @IsPositive({ message: 'El SalaID debe ser un número positivo' })
  SalaID: number;

  @ApiProperty({ description: 'El número de fila del espacio', minimum: 0 })
  @IsInt({ message: 'El Fila debe ser un número entero' })
  @Min(0, { message: 'El Fila debe ser mayor o igual que cero' })
  Fila: number;

  @ApiProperty({ description: 'El número de columna del espacio', minimum: 0 })
  @IsInt({ message: 'El Columna debe ser un número entero' })
  @Min(0, { message: 'El Columna debe ser mayor o igual que cero' })
  Columna: number;

  @ApiProperty({ description: 'Indica si el espacio está disponible', type: Boolean })
  @IsBoolean({ message: 'El Disponible debe ser un booleano' })
  Disponible: boolean;
}
