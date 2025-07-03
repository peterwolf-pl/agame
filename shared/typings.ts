export interface PlayerStats {
  boredom: number;
  intellectual: number;
  luxury: number;
  hunger: number;
  fatigue: number;
  sleep: number;
  social: number;
  love: number;
  sexuality: number;
  stress: number;
  addiction: number;
  hygiene: number;
  health: number;
  jobSatisfaction: number;
  selfDiscipline: number;
  openMindedness: number;
}

export interface AIEventOption {
  id: string;
  description: string;
}

export interface AIEvent {
  text: string;
  options: AIEventOption[];
}
