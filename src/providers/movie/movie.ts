import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private urlBase  = 'https://api.themoviedb.org/3/';
  private action   = 'movie/latest';
  private apiKey   = 'api_key=46d0815688e80d48b9321e430647a08b';
  private language = 'language=pt-BR';

  constructor(
    public http: HttpClient
  ) {

  }

  getLatestMovies(): Observable<Object> {
    return this.http.get(this.urlBase + this.action + '?' + this.apiKey + '&' + this.language);
  }
}
