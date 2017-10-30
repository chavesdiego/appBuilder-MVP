import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ModalController, ViewController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the ModalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ModalProvider {

  constructor(public modalCtrl: ModalController) {
    console.log('Hello ModalProvider Provider');
  }

  openModal() {
    // this.modalCtrl.create().present();
    
  }

}
