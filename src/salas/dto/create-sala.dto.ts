import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

export class CreateSalaDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  Nombre: string;

  @IsNotEmpty({ message: 'La ubicación es obligatoria' })
  @IsString({ message: 'La ubicación debe ser una cadena de texto' })
  Ubicacion: string;

  @IsNotEmpty({ message: 'El número de filas es obligatorio' })
  @IsInt({ message: 'El número de filas debe ser un número entero' })
  @Min(1, { message: 'El número de filas debe ser mayor que cero' })
  NumeroFilas: number;

  @IsNotEmpty({ message: 'El número de columnas es obligatorio' })
  @IsInt({ message: 'El número de columnas debe ser un número entero' })
  @Min(1, { message: 'El número de columnas debe ser mayor que cero' })
  NumeroColumnas: number;
}