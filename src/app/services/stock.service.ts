import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Stock {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) { }

  getStocks(): Observable<Stock[]> {

    return this.httpClient.get<Stock[]>('http://localhost:3000/stocks');

  }

}
