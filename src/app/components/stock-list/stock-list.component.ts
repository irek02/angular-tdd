import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks = [];

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit() {

    this.stocks = this.stockService.getStocks();

  }

}
