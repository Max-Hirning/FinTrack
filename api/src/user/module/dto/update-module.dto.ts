import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { SignUpModuleDto } from '../../../auth/module/dto/create-module.dto';

export class UpdateModuleDto extends PartialType(SignUpModuleDto) {
  @IsString()
    name: string;

  @IsEmail()
    email: string;
}
