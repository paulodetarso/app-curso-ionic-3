import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [
    MovieProvider
  ]
})
export class FilmeDetalhesPage {

  filme;
  idFilme;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider
  ) {

  }

  ionViewDidEnter() {
    this.idFilme = this.navParams.get('id');
    this.movieProvider.getMovieDetails(this.idFilme)
    .subscribe(
      (response) => {
        const data = response as any;
        try {
          this.filme = data;
        } catch (e) {
          console.error(e);
        }
        // this.closeLoading();

        // if (this.isRefreshing) {
        //   this.refresher.complete();
        //   this.isRefreshing = false;
        // }
      },
      (error) => {
        console.error(error);
        // this.closeLoading();

        // if (this.isRefreshing) {
        //   this.refresher.complete();
        //   this.isRefreshing = false;
        // }
      });

  }
}
