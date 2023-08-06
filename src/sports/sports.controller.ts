import { Body, Controller, Get, Post } from '@nestjs/common';
import { SportsService } from './sports.service';
import { ICreateSport } from 'src/_common/interfaces/createSport.interface';
import { ICreateFood } from 'src/_common/interfaces/createFood.interface';
import { ICreateSoccer } from 'src/_common/interfaces/createSoccer.interface';
import { ICreateGame } from 'src/_common/interfaces/createGame.interface';
import { ICreateItem } from 'src/_common/interfaces/createItem.interface';
import { CreateFoodDto } from 'src/_common/interfaces/dtos/createFood.dto';
import { CreateGameDto } from 'src/_common/interfaces/dtos/createGame.dto';
import { CreateItemDto } from 'src/_common/interfaces/dtos/createItem.dto';
import { CreateSoccerDto } from 'src/_common/interfaces/dtos/createSoccer.dto';
import { CreateSportDto } from 'src/_common/interfaces/dtos/createSport.dto';

@Controller('sports')
export class SportsController {
  constructor(private sportsService: SportsService) {}

  @Get()
  findAllSport(): ICreateSport {
    return this.sportsService.findAllSport();
  }

  @Get('food')
  findAllFood(): ICreateFood {
    return this.sportsService.findAllFood();
  }

  @Get('soccer')
  playSoccer(): ICreateSoccer {
    return this.sportsService.playSoccer();
  }

  @Get('game')
  playGame(): ICreateGame {
    return this.sportsService.playGame();
  }

  @Get('item')
  getItem(): ICreateItem {
    return this.sportsService.getItem();
  }
  /**@POST입니다 */

  @Post('test1')
  createFood(@Body() foodData: CreateFoodDto): ICreateFood {
    return this.sportsService.createFood(foodData);
  }

  @Post('test2')
  createGame(@Body() gameData: CreateGameDto): ICreateGame {
    return this.sportsService.createGame(gameData);
  }

  @Post('test3')
  createItem(@Body() itemData: CreateItemDto): ICreateItem {
    return this.sportsService.createItem(itemData);
  }

  @Post('test4')
  createSoccer(@Body() soccerData: CreateSoccerDto): ICreateSoccer {
    return this.sportsService.createSoccer(soccerData);
  }

  @Post('test5')
  createSport(@Body() sportData: CreateSportDto): ICreateSport {
    return this.sportsService.createSport(sportData);
  }
}
