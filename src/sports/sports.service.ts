import { Injectable } from '@nestjs/common';
import { ICreateFood } from 'src/_common/interfaces/createFood.interface';
import { ICreateGame } from 'src/_common/interfaces/createGame.interface';
import { ICreateItem } from 'src/_common/interfaces/createItem.interface';
import { ICreateSoccer } from 'src/_common/interfaces/createSoccer.interface';
import { ICreateSport } from 'src/_common/interfaces/createSport.interface';
import { CreateFoodDto } from 'src/_common/interfaces/dtos/createFood.dto';
import { CreateGameDto } from 'src/_common/interfaces/dtos/createGame.dto';
import { CreateItemDto } from 'src/_common/interfaces/dtos/createItem.dto';
import { CreateSoccerDto } from 'src/_common/interfaces/dtos/createSoccer.dto';
import { CreateSportDto } from 'src/_common/interfaces/dtos/createSport.dto';

@Injectable()
export class SportsService {
  sports: ICreateSport = {
    soccer: '축구',
    baseball: '야구',
    ufc: 'UFC',
    game: '게임',
    swim: '수영',
  };

  findAllSport(): ICreateSport {
    return this.sports;
  }

  foods: ICreateFood = {
    pizza: '페퍼로니피자',
    chickin: 'BHC',
    bread: '초코머핀',
    hamberger: '불고기버거',
    noodle: '신라면',
  };

  findAllFood(): ICreateFood {
    return this.foods;
  }

  soccers: ICreateSoccer = {
    people: 22,
    times: '17:00~19:00',
    where: '서울상암경기장',
  };

  playSoccer(): ICreateSoccer {
    return this.soccers;
  }

  games: ICreateGame = {
    gameName: '리그오브레전드',
    team: 'T1 VS GEN.G',
    where: '서울 e스포츠경기장',
    times: '오후 8시 시작',
    peopleLimit: '500명',
  };

  playGame(): ICreateGame {
    return this.games;
  }

  Items: ICreateItem = {
    name: '제육볶음',
    price: 6000,
    content: '합리적인 가격!',
    itemMaker: '쉐프 : 심재두',
  };

  getItem(): ICreateItem {
    return this.Items;
  }

  /**@POST입니다 */
  createFood(foodData: CreateFoodDto): ICreateFood {
    return { ...foodData };
  }

  createGame(gameData: CreateGameDto): ICreateGame {
    return { ...gameData };
  }

  createItem(itemData: CreateItemDto): ICreateItem {
    return { ...itemData };
  }

  createSoccer(soccerData: CreateSoccerDto): ICreateSoccer {
    return { ...soccerData };
  }

  createSport(sportData: CreateSportDto): ICreateSport {
    return { ...sportData };
  }
}
