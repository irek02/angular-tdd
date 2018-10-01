import { HttpClient } from '@angular/common/http';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { Stock, StockService } from './stock.service';

describe('StockService', () => {

  let stockService: StockService;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let subscribeSpy;

  const mockedStocks: Stock[] = [
    {
      id: 1,
      name: 'Apple',
      price: 195
    }
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        StockService,
        { provide: HttpClient, useFactory: () => spyOnClass(HttpClient) },
      ]
    });

    stockService = TestBed.get(StockService);
    httpClient = TestBed.get(HttpClient);

    subscribeSpy = jasmine.createSpy('subscribeSpy');

  });

  describe('getStocks', () => {

    beforeEach(() => {

      httpClient.get.and.returnValue(of(mockedStocks));

    });

    it('should return stocks from the API', () => {

      stockService.getStocks().subscribe(subscribeSpy);

      expect(subscribeSpy).toHaveBeenCalledWith(mockedStocks);

    });

    it('should request data from the correct API endpoint', () => {

      stockService.getStocks().subscribe();

      expect(httpClient.get).toHaveBeenCalledWith('http://localhost:3000/stocks');

    });

  });

});
