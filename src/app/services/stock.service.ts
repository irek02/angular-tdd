import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getStocks(): Observable<any> {

    return this.httpClient.get('http://localhost:3000/stocks');

  }
}
