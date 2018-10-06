import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { StockService } from '../../services/stock.service';
import { StockListComponent } from './stock-list.component';

describe('StockListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;
  let stockService: jasmine.SpyObj<StockService>;

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
      declarations: [ StockListComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: StockService, useFactory: () => spyOnClass(StockService) },
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

    stockService.getStocks.and.returnValue(of(mockedStocks));

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
