import { Component } from '@angular/core';

/**
 * Generated class for the CartComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'cart',
  templateUrl: 'cart.html'
})
export class CartComponent {

  text: string;

  constructor() {
    console.log('Hello CartComponent Component');
    this.text = 'Hello World';
  }

}
