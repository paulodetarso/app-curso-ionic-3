// Referência:
// No provider for HttpClient - https://stackoverflow.com/a/47261579
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';

@NgModule({
  declarations: [
    FeedPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(FeedPage)
  ],
  exports: [
    FeedPage
  ]
})
export class FeedPageModule {}
