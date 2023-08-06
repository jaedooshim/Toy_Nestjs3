import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  gameName: string;
  @IsNotEmpty()
  @IsString()
  team: string;
  @IsNotEmpty()
  @IsString()
  where: string;
  @IsNotEmpty()
  @IsString()
  times: string;
  @IsNotEmpty()
  @IsString()
  peopleLimit: string;
}
