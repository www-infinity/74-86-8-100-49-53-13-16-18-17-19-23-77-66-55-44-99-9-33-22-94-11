export type ElementCategory =
  | 'light-structural'
  | 'reactive-active'
  | 'transition-resistant'
  | 'refractory-heavy';

export type ProjectCategory = 'hea' | 'fgm' | 'product';

export type DifficultyLevel = 'research' | 'prototype' | 'theoretical';

export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  category: ElementCategory;
  atomicMass: number;
  meltingPoint: number; // °C
  density: number; // g/cm³
  electronConfig: string;
  description: string;
  color: string; // hex for card accent
}

export interface Layer {
  name: string;
  elements: string[]; // element symbols
  color: string; // CSS color
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  heroElements: string[]; // element symbols
  difficulty: DifficultyLevel;
  tags: string[];
  gradient: string; // CSS gradient string
}
