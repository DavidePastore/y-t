import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SwapiFilm } from './swapi-film';
import { SwapiFilms } from './swapi-films';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private readonly swapiUrl = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) { }

  getFilms(): Observable<SwapiFilms> {
    const options = { params: new HttpParams().set('format', 'json') };
    return this.http.get<SwapiFilms>(this.swapiUrl, options);
  }

  getFilm(id: string): Observable<SwapiFilm> {
    const options = { params: new HttpParams().set('format', 'json') };
    return this.http.get<SwapiFilm>(this.swapiUrl + id, options);
  }
}
