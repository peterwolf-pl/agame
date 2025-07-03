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
  label: string;
  resultText: string;
  effects: Partial<PlayerStats>;
}

export interface AIEvent {
  id: string;
  description: string;
  options: AIEventOption[];
}
