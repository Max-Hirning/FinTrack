import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateModuleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  ammount: number;

  @IsString()
  @IsNotEmpty()
  currencyId: string;
}
