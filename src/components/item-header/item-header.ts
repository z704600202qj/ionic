import {Component, Input} from '@angular/core';

/**
 * Generated class for the ItemHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-header',
  templateUrl: 'item-header.html'
})
export class ItemHeaderComponent {

  text: string;

  @Input()
  i: object;

  constructor() {
    console.log('Hello ItemHeaderComponent Component');
    this.text = 'Hello World';
  }

}
