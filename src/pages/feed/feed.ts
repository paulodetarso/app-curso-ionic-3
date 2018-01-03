import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
