import { IsNotEmpty, IsString } from 'class-validator';

export class TokenModuleDto {
  @IsString()
  @IsNotEmpty()
    refreshToken: string;
}