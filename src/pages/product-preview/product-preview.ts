import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductProvider,
     public viewCtrl: ViewController) {

    this.productId = navParams.get('productId');
  }

  dismiss() {

    this.viewCtrl.dismiss();
  }


  ionViewDidLoad() {

    this.productService.getProduct(this.productId)
      .then(product => this.product = product)
  }

}
