import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainFunPage } from './main-fun';

@NgModule({
  declarations: [
    MainFunPage,
  ],
  imports: [
    IonicPageModule.forChild(MainFunPage),
  ],
})
export class MainFunPageModule {}
