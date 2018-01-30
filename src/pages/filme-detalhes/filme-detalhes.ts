import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  loader = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
    this.filme = null;
    this.idFilme = null;
  }

  showLoading() {
    this.loader = this.loadingCtrl.create({
      content: 'Carregando...'
      // duration: 3000
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.showLoading();
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
        this.closeLoading();
      },
      (error) => {
        console.error(error);
        this.closeLoading();
     });
  }
}
