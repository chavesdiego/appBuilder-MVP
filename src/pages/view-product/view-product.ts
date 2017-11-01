import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, Events } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { CartProvider } from '../../providers/cart/cart';
import { NotificationsProvider } from '../../providers/notifications/notifications';
import { ModalNavigatePage } from '../modal-navigate/modal-navigate';

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
  public selectedSize: any;
  public selectedColor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private productService: ProductProvider, private modal : ModalController, private cartService: CartProvider,
    public events: Events, private notificationsService: NotificationsProvider ,public alertCtrl: AlertController) {
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
    let confirm = this.alertCtrl.create({
          title: '',
          message: 'Ir para o carrinho?',
          buttons: [
            {
              text: 'Não',
              handler: () => {
                console.log('Disagree clicked');
              }
            },
            {
              text: 'Sim',
              handler: () => {
                console.log('Agree clicked');
              }
            }
          ]
        });
        confirm.present();
  }

  selectSize(index) {
    this.selectedSize = index
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
    this.selectedColor = index
  }

  colors = ['green', 'red', 'blue', 'black']

  ionViewDidLoad() {

    this.productService.getProduct(this.productId)
      .then(product => this.product = product)
  }

}
