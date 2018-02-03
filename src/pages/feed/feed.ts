import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { ConfigProvider } from '../../providers/config/config';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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

  listaFilmes = new Array<Object>();
  loader = null;
  refresher = null;
  isRefreshing = false;
  paginaAtual = 1;
  infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public movieProvider: MovieProvider,
    public appConfig: ConfigProvider,
    public loadingCtrl: LoadingController
  ) {

  }

  refreshPage(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
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

  carregarFilmes() {
    this.showLoading();
    this.movieProvider.getLatestMovies(this.paginaAtual)
      .subscribe(
      (response) => {
        const data = response as any;
        const results = data.results as Array<Object>;

        try {
          if (this.listaFilmes.length && typeof this.infiniteScroll != 'undefined') {
            this.infiniteScroll.complete();
          }

          if (results.length > 0) {
            results.forEach((filme) => {
              this.listaFilmes.push(filme);
            });
          }
        } catch (e) {
          console.error(e);
        }
        this.closeLoading();
        
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      },
      (error) => {
        console.error(error);
        this.closeLoading();

        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      });
  }

  // `ionViewDidLoad()` só é executado uma vez
  ionViewDidEnter() {
    if (this.listaFilmes.length === 0) {
      this.carregarFilmes();
    }
  }

  abrirDetalhes(filme) {
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id });
  }

  doInfinite(infiniteScroll) {
    this.paginaAtual++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes();
  }
}
