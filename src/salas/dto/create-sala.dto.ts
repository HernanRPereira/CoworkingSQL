import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

export class CreateSalaDto {
  @ApiProperty({ description: 'El nombre de la sala' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  Nombre: string;

  @ApiProperty({ description: 'La ubicación de la sala' })
  @IsNotEmpty({ message: 'La ubicación es obligatoria' })
  @IsString({ message: 'La ubicación debe ser una cadena de texto' })
  Ubicacion: string;

  @ApiProperty({ description: 'El número de filas de la sala' })
  @IsNotEmpty({ message: 'El número de filas es obligatorio' })
  @IsInt({ message: 'El número de filas debe ser un número entero' })
  @Min(1, { message: 'El número de filas debe ser mayor que cero' })
  NumeroFilas: number;

  @ApiProperty({ description: 'El número de columnas de la sala' })
  @IsNotEmpty({ message: 'El número de columnas es obligatorio' })
  @IsInt({ message: 'El número de columnas debe ser un número entero' })
  @Min(1, { message: 'El número de columnas debe ser mayor que cero' })
  NumeroColumnas: number;
}
