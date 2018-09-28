import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostDescPage } from './post-desc';

@NgModule({
  declarations: [
    PostDescPage,
  ],
  imports: [
    IonicPageModule.forChild(PostDescPage),
  ],
})
export class PostDescPageModule {}
