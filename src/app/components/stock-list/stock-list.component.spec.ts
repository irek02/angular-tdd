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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockListComponent ],
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

    spyOn(stockService, 'getStocks').and.returnValue(['Apple', 'Tesla', 'CocaCola', 'GE']);

    fixture.detectChanges();

    expect(elements().stocks.length).toBe(4);

  });

});
