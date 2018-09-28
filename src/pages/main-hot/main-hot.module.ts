import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainHotPage } from './main-hot';

@NgModule({
  declarations: [
    MainHotPage,
  ],
  imports: [
    IonicPageModule.forChild(MainHotPage),
  ],
})
export class MainHotPageModule {}
