import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'El nombre del usuario' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  Nombre: string;

  @ApiProperty({ description: 'La dirección de correo electrónico del usuario' })
  @IsNotEmpty({ message: 'El correo es obligatorio' })
  @IsEmail({}, { message: 'El correo debe ser una dirección de correo válida' })
  Correo: string;

  @ApiProperty({ description: 'El número de teléfono del usuario (opcional)' })
  @IsOptional() // Por si el teléfono no es obligatorio
  @IsString({ message: 'El teléfono debe ser una cadena de texto' })
  Telefono: string;
}