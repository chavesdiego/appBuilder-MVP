import { Component, ViewChild } from '@angular/core'
import { IonicPage, NavController, NavParams, ModalController, Slides } from 'ionic-angular'
import { ProductProvider } from '../../providers/product/product'

import { ViewProductPage } from '../view-product/view-product'
import { ProductPreviewPage } from '../product-preview/product-preview'
import { CartPage } from '../cart/cart'
import { CartProvider } from '../../providers/cart/cart';

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
  public items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private productService: ProductProvider, public modalCtrl: ModalController, private cartService: CartProvider) {

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

  selectProduct({ target, tapCount }, id) {

    if (this.selected)
      document.querySelector('.swiper-slide--selected')
        .classList.remove('swiper-slide--selected')

    target.classList.add('swiper-slide--selected')

    this.selected = id;
  }

  clearSelection() {
    if (!this.selected) return

    document.querySelector('.swiper-slide--selected').classList.remove('swiper-slide--selected')
    this.selected = '';
  }

  openProduct(id) {
    this.modalCtrl.create(ViewProductPage, { productId: id }).present()
  }

  viewProduct() {

    this.modalCtrl.create(ViewProductPage, { productId: this.selected }).present()
    this.clearSelection()
  }

  productPreview({ target }, id) {
    this.clearSelection()

    target.classList.add('preview')

    setTimeout(() => {
      target.classList.remove('preview')
      this.modalCtrl.create(ProductPreviewPage,{ productId: id }).present()
    }, 250)

  }


  goToCartPage() {

    this.navCtrl.push(CartPage)
    // this.modalCtrl.create(CartPage).present()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');

    this.loadProducts()
  }

  ionViewWillLeave() {

    this.clearSelection();
  }

}
