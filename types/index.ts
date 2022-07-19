import type { CSSProperties } from 'vue';

export interface ITheme {
  name: string;
  keyboard: {
    style: CSSProperties;
    keySpacing: CSSProperties;
  };
  key: {
    style: CSSProperties;
    activeTextColor: string;
    activeColor: string;
    width: number; //percentage
  };
}



export enum gameLevels { 
  beginner = "beginner",
  amateur = "amateur",
  professional = "professional",
  expert = "expert",
  dieHard = "dieHard"
}

//declare game types from enums
export type GameLevels = `${gameLevels}`;