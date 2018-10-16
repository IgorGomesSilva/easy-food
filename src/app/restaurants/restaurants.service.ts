import { Error } from './../app.erro';
import { MEAT_API } from './../app.api';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Restaurant } from "app/restaurant/restaurant.model";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class RestaurantsService {

    constructor(private http: Http) {}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
          .map(response => response.json())
          .catch(Error.AnyError)
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(Error.AnyError)
    }
}