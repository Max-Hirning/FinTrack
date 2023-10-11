import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleDto } from './create-module.dto';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class UpdateModuleDto extends PartialType(CreateModuleDto) {
  @IsString()
  @IsNotEmpty()
    typeId: string;

  @IsNumber()
    ammount: number;

  @IsString()
  @IsNotEmpty()
    accountId: string;

  @IsString()
  @IsNotEmpty()
    categoryId: string;

  @IsString()
    description: string;

  @IsString()
  @IsNotEmpty()
    date: string;
}
