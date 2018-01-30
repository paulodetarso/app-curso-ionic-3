import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private urlBase    = 'https://api.themoviedb.org/';
  private apiVersion = '3';
  private apiKey     = 'api_key=46d0815688e80d48b9321e430647a08b';
  private language   = 'language=pt-BR';

  constructor(
    public http: HttpClient
  ) {

  }

  getLatestMovies() {
    return this.http.get(`${this.urlBase}/${this.apiVersion}/movie/popular?${this.apiKey}&${this.language}`);
  }
  
  getMovieDetails(idFilme) {
    return this.http.get(`${this.urlBase}/${this.apiVersion}/movie/${idFilme}?${this.apiKey}&${this.language}`);
  }
}
