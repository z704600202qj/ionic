import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ItemHeaderComponent} from './item-header'

@NgModule({
  declarations: [ItemHeaderComponent],
  imports: [
    IonicPageModule.forChild(ItemHeaderComponent)
  ],
  exports: [ItemHeaderComponent]
})
export class ItemHeaderModule {

}
