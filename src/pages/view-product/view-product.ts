import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { CartProvider } from '../../providers/cart/cart';
import { NotificationsProvider } from '../../providers/notifications/notifications'
import { ModalNavigatePage } from '../modal-navigate/modal-navigate';

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
  public selectedColor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private productService: ProductProvider, private modal : ModalController, private cartService: CartProvider, public events: Events, private notificationsService: NotificationsProvider) {
    this.productId = navParams.get('productId');
  }

  addToCart(product) {
    this.openModal();
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

  openModal(){
    const myModal = this.modal.create('ModalNavigatePage')
    myModal.present()
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
  
    selectColor(index) {
    console.log('Color: ', index);

    this.selectedColor = index
  }

  colors = ['green', 'red', 'blue', 'black']

  ionViewDidLoad() {

    this.productService.getProduct(this.productId)
      .then(product => this.product = product)
  }

}
