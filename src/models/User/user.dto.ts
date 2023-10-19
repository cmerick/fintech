export interface UserDto{
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias?: Preferences
}

interface Preferences{
  playback: number;
  volume: number;
  qualidade: 'baixa' | 'media' | 'alta';
}