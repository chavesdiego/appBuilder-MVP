import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

const apiUrl = 'http://45.55.238.48:8000/api'

@Injectable()
export class ProductProvider {

  constructor(public http: Http) { }

  getProduct(id) {
    return new Promise(resolve => {

      this.http.get(`${apiUrl}/products/${id}`)
        .map(res => res.json())
        .subscribe(data => resolve(data))
    })
  }

  category(id) {

    return new Promise(resolve => {
      this.http.get(`${apiUrl}/categorys/${id}`)
        .map(res => res.json())
        .subscribe(data => resolve(data))
    })
  }

  load() {
    return new Promise(resolve => {

      this.http.get(`${apiUrl}/products`)
        .map(res => res.json())
        .subscribe(data => resolve(data))
    })
  }

}
