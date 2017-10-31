import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ViewProductPage } from '../pages/view-product/view-product';
import { ProductPreviewPage } from '../pages/product-preview/product-preview';
import { CartPage } from '../pages/cart/cart'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProductProvider } from '../providers/product/product';
import { CartProvider } from '../providers/cart/cart';
import { NotificationsProvider } from '../providers/notifications/notifications'

import { DoubleTapDirective } from '../directives/double-tap/double-tap'


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ProductPreviewPage,
    ViewProductPage,
    CartPage,
    DoubleTapDirective
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
    ProductPreviewPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CartProvider,
    NotificationsProvider
  ]
})
export class AppModule {}
