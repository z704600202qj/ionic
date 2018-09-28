import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HeadersComponent} from './headers';

@NgModule({
  declarations: [
    HeadersComponent,
  ],
  imports: [
    IonicPageModule.forChild(HeadersComponent),
  ],
  exports: [HeadersComponent]
})
export class HeadersPageModule {
}
