enum ChampionType {
  UNKNOWN = 'UNKNOWN',
  MARKSMAN = 'MARKSMAN',
  MAGE = 'MAGE',
  ASSASSIN = 'ASSASSIN',
  TANK = 'TANK',
  FIGHTER = 'FIGHTER',
  SUPPORT = 'SUPPORT',
}

export interface Champion {
  champion_id: number;
  type: ChampionType;
  name: string;
  message: string;
}
