import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, Min } from 'class-validator';

export class UpdateSalaDto {
  @ApiProperty({ description: 'El nuevo nombre de la sala', required: false })
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  Nombre?: string;

  @ApiProperty({ description: 'La nueva ubicación de la sala', required: false })
  @IsOptional()
  @IsString({ message: 'La ubicación debe ser una cadena de texto' })
  Ubicacion?: string;

  @ApiProperty({ description: 'El nuevo número de filas de la sala', required: false })
  @IsOptional()
  @IsInt({ message: 'El número de filas debe ser un número entero' })
  @Min(1, { message: 'El número de filas debe ser mayor que cero' })
  NumeroFilas?: number;

  @ApiProperty({ description: 'El nuevo número de columnas de la sala', required: false })
  @IsOptional()
  @IsInt({ message: 'El número de columnas debe ser un número entero' })
  @Min(1, { message: 'El número de columnas debe ser mayor que cero' })
  NumeroColumnas?: number;
}
