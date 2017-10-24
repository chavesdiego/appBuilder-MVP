import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular'
import { ProductProvider } from '../../providers/product/product'

import { ViewProductPage } from '../view-product/view-product'
import {CartPage} from '../cart/cart'

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ProductProvider]
})

export class HomePage {
  public products: any;
  public categories: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductProvider, public modalCtrl: ModalController) {
  }

  loadProducts() {
    
    this.productService.load()
      .then(this.splitByCategory.bind(this))
  }

  createCategorySlider(id, products) {

    this.categories.push({
      name: products[0].category,
      products
    })

  }

  splitByCategory(products) {
    
    const categories = products.map(product => product.categoryId)

    const categoriesId = new Set(categories)

    Array.from(categoriesId).map(id => {  
     
      this.productService.category(id)
        .then(products => {
          this.createCategorySlider(id, products)
        })
    }) 
  }

  viewProduct(id) {
    this.modalCtrl.create(ViewProductPage, { productId: id }).present()
  }

    goToCartPage() {
    this.navCtrl.setRoot(CartPage);
  }

  ionViewDidLoad() {
    
    this.loadProducts()
  }

}
