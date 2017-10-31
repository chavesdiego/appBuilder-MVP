import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart'

/**
 * Generated class for the ModalNavigatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-navigate',
  templateUrl: 'modal-navigate.html',
})
export class ModalNavigatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNavigatePage');
  }

  goToCart() {
    this.navCtrl.setRoot(CartPage);
  }

  closeModal() {
    this.navCtrl.pop()
  }

}
