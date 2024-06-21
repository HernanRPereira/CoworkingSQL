import { IsInt, IsPositive, IsNotEmpty, IsDate } from 'class-validator';

export class CreateReservaDto {
  @IsNotEmpty({ message: 'El UsuarioID es obligatorio' })
  @IsInt({ message: 'El UsuarioID debe ser un número entero' })
  @IsPositive({ message: 'El UsuarioID debe ser un número positivo' })
  UsuarioID: number;

  @IsNotEmpty({ message: 'El EspacioID es obligatorio' })
  @IsInt({ message: 'El EspacioID debe ser un número entero' })
  @IsPositive({ message: 'El EspacioID debe ser un número positivo' })
  EspacioID: number;

  @IsNotEmpty({ message: 'El SesionID es obligatorio' })
  @IsInt({ message: 'El SesionID debe ser un número entero' })
  @IsPositive({ message: 'El SesionID debe ser un número positivo' })
  SesionID: number;

  @IsNotEmpty({ message: 'La FechaReserva es obligatoria' })
  @IsDate({ message: 'La FechaReserva debe ser una instancia válida de Date' })
  FechaReserva: Date;
}