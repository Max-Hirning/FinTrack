import { IsNotEmpty, IsJWT } from 'class-validator';

export class TokenModuleDto {
  @IsJWT()
  @IsNotEmpty()
    refreshToken: string;
}