export interface Sponsor {
  id: string;
  level: LevelSponsorEnum;
  name: string;
  website: string;
  logo: string;
}

export enum LevelSponsorEnum {
  BALTHAZAR = 'BALTHAZAR',
  IMPERIAL = 'IMPÉRIAL',
  MAGNUM = 'MAGNUM',
  CHOPINE = 'CHOPINE'
}
