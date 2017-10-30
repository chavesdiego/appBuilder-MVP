import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ViewProductPage } from '../pages/view-product/view-product';
import {CartPage} from '../pages/cart/cart'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProductProvider } from '../providers/product/product';
import { CartProvider } from '../providers/cart/cart';
import { NotificationsProvider } from '../providers/notifications/notifications';
import { ModalProvider } from '../providers/modal/modal';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ViewProductPage,
    CartPage    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'md'
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ViewProductPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CartProvider,
    NotificationsProvider,
    ModalProvider
  ]
})
export class AppModule {}
