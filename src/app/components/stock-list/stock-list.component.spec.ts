import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StockListComponent } from './stock-list.component';
import { StockService } from '../../services/stock.service';
import { By } from '@angular/platform-browser';

fdescribe('StockListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;
  let stockService: StockService;

  const elements = () => {
    return {
      stocks: fixture.debugElement.queryAll(By.css('.stock')),
      stockName: fixture.debugElement.query(By.css('.stock .name')),
      stockPrice: fixture.debugElement.query(By.css('.stock .price')),
      buyBtn: fixture.debugElement.query(By.css('.stock .buyBtn a'))
    };
  };

  const mockedStocks = [
    {
      id: 1,
      name: 'Apple',
      price: 195
    },
    {
      id: 2,
      name: 'Tesla',
      price: 115
    },
    {
      id: 3,
      name: 'CocaCola',
      price: 98
    },
    {
      id: 4,
      name: 'GE',
      price: 90
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockListComponent],
      imports: [ RouterTestingModule ],
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

  beforeEach(() => {

    spyOn(stockService, 'getStocks').and.returnValue(mockedStocks);

  });

  it('should list stocks', () => {

    fixture.detectChanges();

    expect(elements().stocks.length).toBe(4);

  });

  it('should show info for a stock', () => {

    fixture.detectChanges();

    expect(elements().stockName.nativeElement.textContent).toContain('Apple');

    expect(elements().stockPrice.nativeElement.textContent).toContain('195');

  });

  it('should show buy button for a stock', () => {

    fixture.detectChanges();

    const buyBtn = elements().buyBtn;

    expect(buyBtn).toBeTruthy();

    expect(buyBtn.nativeElement.getAttribute('href')).toEqual('/buy/1');

  });

});
