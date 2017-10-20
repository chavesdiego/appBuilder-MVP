import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewProductPage } from './view-product';

@NgModule({
  declarations: [
    ViewProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewProductPage),
  ],
})
export class ViewProductPageModule {}
