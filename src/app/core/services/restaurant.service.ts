import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(
    private _http: HttpClient
  ) { }

  getRestaurant() {
    const url = 'assets/restaurantData.json';
    return this._http.get(url);
  }
}
