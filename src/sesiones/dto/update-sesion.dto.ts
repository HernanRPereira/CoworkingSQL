import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsISO8601 } from 'class-validator';

export class UpdateSesionDto {
  @ApiProperty({ description: 'La nueva fecha de la sesión', format: 'date-time', required: false })
  @IsOptional()
  @IsISO8601({ strict: true }, { message: 'La fecha debe tener un formato válido (ISO 8601)' })
  Fecha?: Date;

  @ApiProperty({ description: 'La nueva hora de inicio de la sesión (en formato ISO 8601)', required: false })
  @IsOptional()
  @IsString({ message: 'La hora de inicio debe ser una cadena de texto' })
  @IsISO8601({ strict: true }, { message: 'La hora de inicio debe tener un formato válido (ISO 8601)' })
  HoraInicio?: string;

  @ApiProperty({ description: 'La nueva hora de fin de la sesión (en formato ISO 8601)', required: false })
  @IsOptional()
  @IsString({ message: 'La hora de fin debe ser una cadena de texto' })
  @IsISO8601({ strict: true }, { message: 'La hora de fin debe tener un formato válido (ISO 8601)' })
  HoraFin?: string;
}
