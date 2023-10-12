import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { SignUpModuleDto } from '../../../auth/module/dto/create-module.dto';

export class UpdateModuleDto extends PartialType(SignUpModuleDto) {
  @IsString()
  @IsNotEmpty()
    name: string;

  @IsEmail()
  @IsNotEmpty()
    email: string;
}
