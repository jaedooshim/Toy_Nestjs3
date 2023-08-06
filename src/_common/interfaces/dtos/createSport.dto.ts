import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSportDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  soccer: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  baseball: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  ufc: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  game: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  swim: string;
}
