import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSoccerDto {
  @IsNotEmpty()
  @IsNumber()
  people: number;

  @IsNotEmpty()
  @IsString()
  times: string;

  @IsNotEmpty()
  @IsString()
  where: string;
}
