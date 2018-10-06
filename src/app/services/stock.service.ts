import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  getStocks(): Observable<any> {

    // Use HttpClient to call the API URL and return data.
    return of([]);
  }
}
