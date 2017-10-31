import { Component, ViewChild } from '@angular/core'
import { IonicPage, NavController, NavParams, ModalController, Slides } from 'ionic-angular'
import { ProductProvider } from '../../providers/product/product'

import { ViewProductPage } from '../view-product/view-product'
import { CartPage } from '../cart/cart'

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ProductProvider]
})

export class HomePage {
  @ViewChild(Slides) slides: Slides;
  public products: any;
  public categories: any = [];
  public selected: any;

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

  selectProduct({ target }, id) {

    if (this.selected)
      document.querySelector('.swiper-slide--selected')
        .classList.remove('swiper-slide--selected')

    target.classList.add('swiper-slide--selected')

    console.log(this.slides)

    this.slides.stopAutoplay()
    this.selected = id;
  }

  viewProduct() {

    this.modalCtrl.create(ViewProductPage, { productId: this.selected }).present()
  }

  goToCartPage() {

    // this.navCtrl.setRoot(CartPage)
    this.modalCtrl.create(CartPage).present()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');

    this.loadProducts()
  }

}
