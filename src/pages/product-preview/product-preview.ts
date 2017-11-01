import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { CartProvider } from '../../providers/cart/cart';
import { NotificationsProvider } from '../../providers/notifications/notifications';


/**
 * Generated class for the ProductPreviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-preview',
  templateUrl: 'product-preview.html',
})

export class ProductPreviewPage {
  public product: any;
  public productId: any;
  public selectedSize: any;
  public selectedColor: any;
  public colors = ['green', 'red', 'blue', 'black']

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     private productService: ProductProvider,
     public viewCtrl: ViewController,
     private cartService: CartProvider,
     private notificationsService: NotificationsProvider
   ) {

    this.productId = navParams.get('productId');
  }

  dismiss() {

    this.viewCtrl.dismiss();
  }

  selectSize(index) {

    this.selectedSize = index
  }

  selectColor(index) {

    this.selectedColor = index
  }

  addToCart(product) {

    this.cartService.addItem({
      "name": product.name,
      "imagePath": product.imagePath,
      "price": product.price,
      "productId": product._id
    }).then(res => {
      let resObj = Object.assign(res)
      this.notificationsService.presentToast(`O item ${resObj.name} foi adicionado com sucesso.`)
      this.dismiss()
    })
  }

  ionViewDidLoad() {

    this.productService.getProduct(this.productId)
      .then(product => this.product = product)
  }

}
