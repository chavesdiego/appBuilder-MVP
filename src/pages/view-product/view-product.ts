import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { CartProvider } from '../../providers/cart/cart';
import { NotificationsProvider } from '../../providers/notifications/notifications'
import { ModalProvider } from '../../providers/modal/modal';

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
  public selected: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private productService: ProductProvider, private cartService: CartProvider, private modalService: ModalProvider, public events: Events, private notificationsService: NotificationsProvider) {
    this.productId = navParams.get('productId');
  }

  addToCart(product) {
    this.modalService.openModal();
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

  }

  selectSize(index) {
    console.log('indeeeeex', index)

    this.selected = index
    //   if(this.selected)
    //     document.querySelector('.swiper-slide--selected')
    //       .classList.remove('swiper-slide--selected')

    //   target.classList.add('swiper-slide--selected')

    //   console.log(this.slides)

    //   this.slides.stopAutoplay()
    //   this.selected = id;
    // }
  }

  ionViewDidLoad() {

    this.productService.getProduct(this.productId)
      .then(product => this.product = product)
  }

}
