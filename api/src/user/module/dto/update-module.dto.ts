import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { SignUpModuleDto } from '../../../auth/module/dto/create-module.dto';

export class UpdateModuleDto extends PartialType(SignUpModuleDto) {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
