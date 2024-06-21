import { IsDate, IsNotEmpty, IsString, IsISO8601 } from 'class-validator';

export class CreateSesionDto {
  @IsNotEmpty({ message: 'La fecha es obligatoria' })
  @IsDate({ message: 'La fecha debe ser una instancia de Date' })
  Fecha: Date;

  @IsNotEmpty({ message: 'La hora de inicio es obligatoria' })
  @IsString({ message: 'La hora de inicio debe ser una cadena de texto' })
  @IsISO8601({ strict: true }, { message: 'La hora de inicio debe tener un formato válido (ISO 8601)' })
  HoraInicio: string;

  @IsNotEmpty({ message: 'La hora de fin es obligatoria' })
  @IsString({ message: 'La hora de fin debe ser una cadena de texto' })
  @IsISO8601({ strict: true }, { message: 'La hora de fin debe tener un formato válido (ISO 8601)' })
  HoraFin: string;
}