import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  content: string;

  @IsNotEmpty()
  @IsString()
  itemMaker: string;
}
