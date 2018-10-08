import { HttpClient } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { StockService } from './stock.service';

describe('StockService', () => {
  let stockService: StockService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StockService,
        { provide: HttpClient, useFactory: () => spyOnClass(HttpClient) },
      ]
    });

    stockService = TestBed.get(StockService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {

    expect(stockService).toBeTruthy();

  });

  describe('getStocks', () => {

    it('should get stocks', () => {

      httpClient.get.and.returnValue(of([
        {
          id: 1,
          name: 'Apple',
          price: 195
        }
      ]));

      const spy = jasmine.createSpy('spy');

      stockService.getStocks().subscribe(spy);

      expect(spy).toHaveBeenCalledWith([
        {
          id: 1,
          name: 'Apple',
          price: 195
        }
      ]);

    });

  });

});
