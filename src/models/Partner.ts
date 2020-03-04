export interface Partner {
  id: string;
  level: LevelPartnerEnum;
  name: string;
  website: string;
  logo: string;
}

export enum LevelPartnerEnum {
  BALTHAZAR = 'BALTHAZAR',
  IMPÉRIAUX = 'IMPÉRIAUX',
  MAGNUM = 'MAGNUM',
  CHOPINE = 'CHOPINE'
}
