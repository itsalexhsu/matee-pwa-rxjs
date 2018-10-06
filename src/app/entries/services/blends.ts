import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BlendsService {

    getBlends() {
        return this.http.get('http://localhost:3000/products')
    }

    constructor(
        private http: HttpClient
    ) {

    }
}