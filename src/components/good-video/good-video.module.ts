import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GoodVideoComponent} from './good-video';

@NgModule({
  declarations: [
    GoodVideoComponent,
  ],
  imports: [
    IonicPageModule.forChild(GoodVideoComponent),
  ],
  exports: [GoodVideoComponent]

})
export class GoodVideoPageModule {
}
