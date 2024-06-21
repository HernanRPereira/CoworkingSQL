import { IsInt, IsBoolean, IsPositive, Min } from 'class-validator';

export class CreateEspacioDto {
  @IsInt({ message: 'El SalaID debe ser un número entero' })
  @IsPositive({ message: 'El SalaID debe ser un número positivo' })
  SalaID: number;

  @IsInt({ message: 'El Fila debe ser un número entero' })
  @Min(0, { message: 'El Fila debe ser mayor o igual que cero' })
  Fila: number;

  @IsInt({ message: 'El Columna debe ser un número entero' })
  @Min(0, { message: 'El Columna debe ser mayor o igual que cero' })
  Columna: number;

  @IsBoolean({ message: 'El Disponible debe ser un booleano' })
  Disponible: boolean;
}