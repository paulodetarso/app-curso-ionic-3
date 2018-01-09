import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from './../perfil/perfil';

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  rootPage = PerfilPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  openPage(page): void {
    this.navCtrl.push(page);
  }
}
