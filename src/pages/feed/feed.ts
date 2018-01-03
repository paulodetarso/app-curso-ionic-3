import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objetoFeed = {
    titulo: 'Esse aliqua duis ea fugiat',
    data: '2 de janeiro de 2017',
    descricao: 'Voluptate quis proident irure ad deserunt eu dolore dolor cupidatat exercitation cillum culpa.',
    qde_likes: 12,
    qde_comments: 4,
    ultimo_comment: 'Há 11 horas',
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {

  }

  ionViewDidLoad(): void {
    this.movieProvider.getLatestMovies()
      .subscribe(
        response => {
          const results = response as Observable<Object>;
          console.log(results);
        },
        error => {
          console.error(error);
        }
      );
  }
}
