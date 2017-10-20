import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product'
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
              private productService: ProductProvider,  public events: Events) {
    this.productId = navParams.get('productId');
  }

  addToCart(product) {
    this.events.publish('cart:add', product, 1);
  }

  ionViewDidLoad() {

    this.productService.getProduct(this.productId)
      .then(product => this.product = product)
  }

}
