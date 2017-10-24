import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart'


import { HomePage } from '../home/home'


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

  ngOnInit() {
    return this.cartService.getItems()
      .subscribe(item => this.items = item)
  }

  removeItem(item) {
    this.cartService.deleteItem(item._id)
      .then(this.items.splice(item, 1))

  }

  cleanCart() {
    this.items.map(item => this.cartService.deleteItem(item._id))
    this.items = []
  }

  goToHomePage() {
    this.navCtrl.setRoot(HomePage);
  }


}
