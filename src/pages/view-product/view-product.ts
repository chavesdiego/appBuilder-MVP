import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { CartProvider } from '../../providers/cart/cart';
import { NotificationsProvider } from '../../providers/notifications/notifications'
import { Events } from 'ionic-angular';

/**
 * Generated class for the ViewProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-product',
  templateUrl: 'view-product.html'
})

export class ViewProductPage {
  public product: any;
  public productId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private productService: ProductProvider, private cartService: CartProvider, public events: Events, private notificationsService: NotificationsProvider) {
    this.productId = navParams.get('productId');
  }

  addToCart(product) {
    let item = {
      "name": product.name,
      "imagePath": product.imagePath,
      "price": product.price,
      "productId": product._id
    }
    this.cartService.addItem(item)
      .then(res => {
        let resObj = Object.assign(res)
        this.notificationsService.presentToast(`O item ${resObj.name} foi adicionado com sucesso.`)
      })


    //this.events.publish('cart:add', product, 1);
  }

  ionViewDidLoad() {

    this.productService.getProduct(this.productId)
      .then(product => this.product = product)
  }

}
