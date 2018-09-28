import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubTabsPage } from './sub-tabs';

@NgModule({
  declarations: [
    SubTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SubTabsPage),
  ],
})
export class SubTabsPageModule {}
