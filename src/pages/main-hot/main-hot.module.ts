import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MainHotPage} from './main-hot';
import {ItemsPageModule} from "../../components/items/items.module";
import {HeadersPageModule} from "../../components/headers/headers.module";
import {ItemHeaderModule} from "../../components/item-header/item-header.module";
import {GoodVideoPageModule} from '../../components/good-video/good-video.module'

@NgModule({
  declarations: [
    MainHotPage,
  ],
  imports: [
    IonicPageModule.forChild(MainHotPage),
    ItemsPageModule,
    HeadersPageModule,
    ItemHeaderModule,
    GoodVideoPageModule
  ],
  exports:[ ]
})
export class MainHotPageModule {
}



