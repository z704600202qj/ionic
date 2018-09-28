import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubHomePage } from './sub-home';

@NgModule({
  declarations: [
    SubHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SubHomePage),
  ],
})
export class SubHomePageModule {}
