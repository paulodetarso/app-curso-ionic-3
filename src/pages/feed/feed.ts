import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { ConfigProvider } from '../../providers/config/config';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  objetoFeed = {
    titulo: 'Esse aliqua duis ea fugiat',
    data: '2 de janeiro de 2017',
    descricao: 'Voluptate quis proident irure ad deserunt eu dolore dolor cupidatat exercitation cillum culpa.',
    qde_likes: 12,
    qde_comments: 4,
    ultimo_comment: 'Há 11 horas',
  };

  listaFilmes = new Array<any>();

  constructor(
    public movieProvider: MovieProvider,
    public appConfig: ConfigProvider
  ) {
    this.appConfig.setConfig('showSlide', false);
  }

  ionViewDidLoad(): void {
    this.movieProvider.getLatestMovies()
      .subscribe(
        response => {
          const data = response as any;
          try {
            this.listaFilmes = data.results;
            console.log(this.listaFilmes);
          } catch(e) {
            console.error(e);
          }
        },
        error => {
          console.error(error);
        }
      );
  }
}
