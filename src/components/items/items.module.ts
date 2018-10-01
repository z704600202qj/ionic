import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ItemsComponent} from './items';
@NgModule({
  declarations: [
    ItemsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ItemsComponent),
  ],
  exports: [ItemsComponent]

})
export class ItemsPageModule {
}
