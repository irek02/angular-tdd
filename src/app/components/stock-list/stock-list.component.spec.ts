import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListComponent } from './stock-list.component';
import { StockService } from '../../services/stock.service';

fdescribe('StockListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;
  let stockService: StockService;

  const elements = () => {
    return {
      stocks: fixture.nativeElement.querySelectorAll('.stock')
    };
  };

  const mockedStocks = [
    {
      id: 1,
      name: 'Apple',
      sharePrice: 195
    },
    {
      id: 2,
      name: 'Tesla',
      sharePrice: 115
    },
    {
      id: 3,
      name: 'CocaCola',
      sharePrice: 98
    },
    {
      id: 4,
      name: 'GE',
      sharePrice: 90
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockListComponent],
      providers: [
        StockService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListComponent);
    component = fixture.componentInstance;
    stockService = TestBed.get(StockService);
  });

  it('should list stocks', () => {

    spyOn(stockService, 'getStocks').and.returnValue(mockedStocks);

    fixture.detectChanges();

    expect(elements().stocks.length).toBe(4);

  });

  // it('should show info for each stock', () => {

  //   spyOn(stockService, 'getStocks').and.returnValue(['Apple', 'Tesla', 'CocaCola', 'GE']);

  //   fixture.detectChanges();

  //   expect(elements().stocks.length).toBe(4);

  // });

});
