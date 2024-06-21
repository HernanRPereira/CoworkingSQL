import { IsNotEmpty, IsEmail, IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  Nombre: string;

  @IsNotEmpty({ message: 'El correo es obligatorio' })
  @IsEmail({}, { message: 'El correo debe ser una dirección de correo válida' })
  Correo: string;

  @IsOptional() // Por si el teléfono no es obligatorio
  @IsString({ message: 'El teléfono debe ser una cadena de texto' })
  Telefono: string;
}