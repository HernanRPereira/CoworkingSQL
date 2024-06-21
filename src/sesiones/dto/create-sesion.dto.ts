import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsISO8601 } from 'class-validator';

export class CreateSesionDto {
  @ApiProperty({ description: 'La fecha de la sesión', format: 'date-time' })
  @IsNotEmpty({ message: 'La fecha es obligatoria' })
  @IsISO8601({ strict: true }, { message: 'La fecha debe tener un formato válido (ISO 8601)' })
  Fecha: Date;

  @ApiProperty({ description: 'La hora de inicio de la sesión (en formato ISO 8601)' })
  @IsNotEmpty({ message: 'La hora de inicio es obligatoria' })
  @IsString({ message: 'La hora de inicio debe ser una cadena de texto' })
  @IsISO8601({ strict: true }, { message: 'La hora de inicio debe tener un formato válido (ISO 8601)' })
  HoraInicio: string;

  @ApiProperty({ description: 'La hora de fin de la sesión (en formato ISO 8601)' })
  @IsNotEmpty({ message: 'La hora de fin es obligatoria' })
  @IsString({ message: 'La hora de fin debe ser una cadena de texto' })
  @IsISO8601({ strict: true }, { message: 'La hora de fin debe tener un formato válido (ISO 8601)' })
  HoraFin: string;
}