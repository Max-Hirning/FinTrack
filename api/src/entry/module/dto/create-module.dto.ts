import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateModuleDto {
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
}
