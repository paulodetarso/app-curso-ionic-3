// Referência:
// No provider for HttpClient - https://stackoverflow.com/a/47261579
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FeedPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(FeedPage)
  ],
})
export class FeedPageModule {}
