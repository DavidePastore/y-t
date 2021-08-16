import { SwapiFilm } from './swapi-film';

export interface SwapiFilms {
  count: number;
  next: string;
  previous: string;
  results: Array<SwapiFilm>;
}
