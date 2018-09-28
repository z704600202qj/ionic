import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular'

/**
 * Generated class for the ItemsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'items',
  templateUrl: 'items.html'
})
export class ItemsComponent {

  text: string;
  @Input()
  private item: object;

  constructor(public navCtrl: NavController) {
    this.text = 'Hello World';
  }


  look_desc(item) {
    console.log(item);
    this.navCtrl.push('PostDescPage', {
      wid: item.wid,
      tid: item.tid
    })

  }

}
