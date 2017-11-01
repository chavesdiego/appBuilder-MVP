import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';
import {NotificationsProvider} from '../../providers/notifications/notifications'


import { HomePage } from '../home/home'


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public items: any = {};
  public total: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartService: CartProvider, private notificationsService : NotificationsProvider) {
    this.items = {
      loading: true,
      list: [],
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CartPage');
  }

  ngOnInit() {
    return this.cartService.getItems()
      .subscribe(item => {
        this.items = {
          list: item,
          loading: false
        }

        this.total = this.items.list.reduce((acc, curr) => {
           return acc += curr.price
         }, 0)
      })
  }

  removeItem(item) {
    this.cartService.deleteItem(item._id)
      .then(() => {
        this.items.list = this.items.list.filter(i => i._id !== item._id)
        this.total -= item.price;
      })

    this.notificationsService.presentToast(`O item foi removido com sucesso.`)
  }

  cleanCart() {
    this.items.list.map(item => this.cartService.deleteItem(item._id))

    this.items = {
      list: [],
      loading: false
    }

    this.notificationsService.presentToast(`Carrinho limpo.`)
    this.total = 0;
  }

  goToHomePage() {
    this.navCtrl.pop();
  }


}
