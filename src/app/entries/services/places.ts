import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class PlacesService {

    searchNearby(request) {
        let header = new HttpHeaders()
            .set('X-Api-Key', 'M1jHRx8h0b3Voa1NaiMro7OXuBbaFqC269DpF5bO')
        return this.http.post('https://1icvydmbr9.execute-api.us-east-1.amazonaws.com/Production/GetNearby', {
            location: request.location,
            radius: request.radius,
            key: 'AIzaSyAXGgaPGzrPXDeH7rwSlitQ6S4DvkHYqOg'
        }, {
            headers: header
        })
    }

    searchByText(request) {
        let header = new HttpHeaders()
            .set('X-Api-Key', 'M1jHRx8h0b3Voa1NaiMro7OXuBbaFqC269DpF5bO')
        return this.http.post('https://vwp8xdydd1.execute-api.us-east-1.amazonaws.com/Production/searchByText', {
            query: request.query,    
            location: request.location,
            radius: request.radius,
            key: 'AIzaSyAXGgaPGzrPXDeH7rwSlitQ6S4DvkHYqOg'
        }, {
            headers: header
        })
    }

    constructor(
        private http: HttpClient
    ) {

    }
}