import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFoodDto {
  @IsNotEmpty()
  @IsString()
  pizza: string;

  @IsNotEmpty()
  @IsString()
  chickin: string;

  @IsNotEmpty()
  @IsString()
  bread: string;

  @IsNotEmpty()
  @IsString()
  hamberger: string;

  @IsNotEmpty()
  @IsString()
  noodle: string;
}
