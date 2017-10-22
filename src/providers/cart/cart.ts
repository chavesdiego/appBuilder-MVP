import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const apiUrl = 'http://45.55.238.48:8000/api'

@Injectable()
export class CartProvider {

  constructor(public http: Http) { }

  getItems() {
    return new Promise(resolve => {

      this.http.get(`${apiUrl}/carts`)
        .map(res => res.json())
        .subscribe(data => resolve(data))
    })
  }

  addItem(item) {
    return new Promise(resolve => {

      this.http.post(`${apiUrl}/carts`, item)
        .map(res => res.json())
        .subscribe(data => resolve(data))
    })
  }




}
