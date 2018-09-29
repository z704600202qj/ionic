import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { ItemHeaderComponent } from './item-header/item-header';


@NgModule({
  declarations: [ItemHeaderComponent],
  imports: [IonicModule],//如果组件用的ionic的组件时需要引入
  exports: [ItemHeaderComponent]
})
export class ComponentsModule {
}
