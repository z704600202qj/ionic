import { Component } from '@angular/core';

/**
 * Generated class for the HeadersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'headers',
  templateUrl: 'headers.html'
})
export class HeadersComponent {

  text: string;

  constructor() {
    console.log('Hello HeadersComponent Component');
    this.text = 'Hello World';
  }

}
