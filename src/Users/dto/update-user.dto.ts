import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ description: 'El nuevo nombre del usuario', required: false })
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  Nombre?: string;

  @ApiProperty({ description: 'La nueva dirección de correo electrónico del usuario', required: false })
  @IsOptional()
  @IsEmail({}, { message: 'El correo debe ser una dirección de correo válida' })
  Correo?: string;

  @ApiProperty({ description: 'El nuevo número de teléfono del usuario', required: false })
  @IsOptional()
  @IsString({ message: 'El teléfono debe ser una cadena de texto' })
  Telefono?: string;
}