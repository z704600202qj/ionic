import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MainHotPage} from './main-hot';
import {ItemsPageModule} from "../../components/items/items.module";
import {HeadersPageModule} from "../../components/headers/headers.module";
import {ItemHeaderModule} from "../../components/item-header/item-header.module";

@NgModule({
  declarations: [
    MainHotPage,

  ],
  imports: [
    IonicPageModule.forChild(MainHotPage),
    ItemsPageModule,
    HeadersPageModule,
    ItemHeaderModule
  ],
  exports:[ ]
})
export class MainHotPageModule {
}



