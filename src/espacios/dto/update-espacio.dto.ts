import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsBoolean, IsPositive, Min, IsOptional } from 'class-validator';

export class UpdateEspacioDto {
  @ApiProperty({ description: 'El nuevo ID de la sala a la que pertenece el espacio', required: false })
  @IsOptional()
  @IsInt({ message: 'El SalaID debe ser un número entero' })
  @IsPositive({ message: 'El SalaID debe ser un número positivo' })
  SalaID?: number;

  @ApiProperty({ description: 'El nuevo número de fila del espacio', required: false, minimum: 0 })
  @IsOptional()
  @IsInt({ message: 'El Fila debe ser un número entero' })
  @Min(0, { message: 'El Fila debe ser mayor o igual que cero' })
  Fila?: number;

  @ApiProperty({ description: 'El nuevo número de columna del espacio', required: false, minimum: 0 })
  @IsOptional()
  @IsInt({ message: 'El Columna debe ser un número entero' })
  @Min(0, { message: 'El Columna debe ser mayor o igual que cero' })
  Columna?: number;

  @ApiProperty({ description: 'El nuevo estado de disponibilidad del espacio', required: false, type: Boolean })
  @IsOptional()
  @IsBoolean({ message: 'El Disponible debe ser un booleano' })
  Disponible?: boolean;
}
