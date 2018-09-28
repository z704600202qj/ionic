import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainMyPage } from './main-my';

@NgModule({
  declarations: [
    MainMyPage,
  ],
  imports: [
    IonicPageModule.forChild(MainMyPage),
  ],
})
export class MainMyPageModule {}
