import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class TokenModuleDto {
  @IsString()
  @IsNotEmpty()
    refreshToken: string;
}

export class SignInModuleDto {
  @IsEmail()
  @IsString()
    email: string;

  @IsString()
  @IsNotEmpty()
    password: string;
}

export class SignUpModuleDto {
  @IsString()
  @IsNotEmpty()
    name: string;

  @IsEmail()
  @IsString()
    email: string;

  @IsString()
  @IsNotEmpty()
    password: string;
}