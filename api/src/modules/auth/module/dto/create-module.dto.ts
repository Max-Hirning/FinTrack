import { IsEmail, IsNotEmpty, IsString, IsJWT, MinLength } from 'class-validator';

export class TokenModuleDto {
  @IsJWT()
  @IsNotEmpty()
    refreshToken: string;
}

export class SignInModuleDto {
  @IsEmail()
  @IsString()
    email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
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
  @MinLength(8)
    password: string;
}