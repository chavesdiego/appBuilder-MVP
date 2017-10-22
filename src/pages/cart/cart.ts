import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart'


import { HomePage } from '../home/home'

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartService: CartProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  getItems() {
    return this.cartService.items()
    .then(item => this.items = item)
  }

  goToHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

}
