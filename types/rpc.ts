import { BattleField } from './battle_field';
import { Champion } from './champion';

/* tslint:disable:no-empty-interface */
export interface Empty {}

export interface GetChampionRequest {
  champion_id: number;
}

export interface GetChampionResponse {
  champion: Champion;
}

export interface ListChampionsResponse {
  champions: Champion[];
}

export interface GetBattleFieldResponse {
  battle_field: BattleField;
}

export interface RpcService {
  getChampion(data: GetChampionRequest): Promise<GetChampionResponse>;
  listChampions(data: Empty): Promise<ListChampionsResponse>;
  getBattleField(data: Empty): Promise<GetBattleFieldResponse>;
}
