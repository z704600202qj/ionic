import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubMyPage } from './sub-my';

@NgModule({
  declarations: [
    SubMyPage,
  ],
  imports: [
    IonicPageModule.forChild(SubMyPage),
  ],
})
export class SubMyPageModule {}
