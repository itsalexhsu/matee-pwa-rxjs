import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class LambdaProductService {

  getProduct(id) {
    let header = new HttpHeaders()
      .set('x-api-key', 'ZnKzhNlVIb4Y8j8e4Fa6qJVIfvg1KOp9qWg2kfW1')
      .set('content-type', 'application/json')

    return this.http.post('https://2osk0plef4.execute-api.us-east-1.amazonaws.com/default/GetProduct', {
      "id": "1692831645763"
    }, {
      headers: header
    })
  }

  getIngredients() {
    let header = new HttpHeaders()
      .set('x-api-key', 'ZnKzhNlVIb4Y8j8e4Fa6qJVIfvg1KOp9qWg2kfW1')
      .set('content-type', 'application/json')

    return this.http.get('https://4lanik9f4m.execute-api.us-east-1.amazonaws.com/default/GetIngredients', {
      headers: header
    })
  }

  constructor(
    private http: HttpClient
  ) { }

}