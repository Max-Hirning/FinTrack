import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInModuleDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class SignUpModuleDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}