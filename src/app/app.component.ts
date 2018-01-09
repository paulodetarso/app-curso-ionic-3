import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform } from 'ionic-angular';
import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from './../providers/config/config';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public appConfig: ConfigProvider
  ) {
    const config = this.appConfig.getConfig();
    
    // Se for a primeira vez que está acessando, exibe a tela de introdução
    if (config === null || config.hideIntroPage === false) {
      this.appConfig.setConfig('hideIntroPage', true);
      this.rootPage = IntroPage;
    } else {
      this.rootPage = TabsPage;
    }

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
