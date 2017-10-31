import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductPreviewPage } from './product-preview';

@NgModule({
  declarations: [
    ProductPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductPreviewPage),
  ],
})
export class ProductPreviewPageModule {}
