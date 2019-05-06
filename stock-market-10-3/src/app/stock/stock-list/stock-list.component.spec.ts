



/** Standard imports, skipping for brevity **/

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController }
    from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';


import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { StockService } from 'app/services/stock.service';
import { Stock } from 'app/model/stock';
import { FormsModule } from '@angular/forms';

import { StockListComponent } from './stock-list.component';

import { StockItemComponent } from 'app/stock/stock-item/stock-item.component';



describe('StockListComponent With Real Service', () => {

  let component: StockListComponent;

  let fixture: ComponentFixture<StockListComponent>;

  let httpBackend: HttpTestingController;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockListComponent, StockItemComponent ],
      providers: [ StockService ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));




  beforeEach(inject([HttpTestingController],
      (backend: HttpTestingController) => {

    httpBackend = backend;

    fixture = TestBed.createComponent(StockListComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

    httpBackend.expectOne({
      url: '/api/stock',
      method: 'GET'
    }, 'Get list of stocks')
    .flush([{
      name: 'Test Stock 1',
      code: 'TS1',
      price: 80,
      previousPrice: 90,
      exchange: 'NYSE'
    }, {
      name: 'Test Stock 2',
      code: 'TS2',
      price: 800,
      previousPrice: 900,
      exchange: 'NYSE'
    }]);
  }));

  it('should load stocks from real service on init',
      async(() => {
          expect(component).toBeTruthy();
          expect(component.stocks$).toBeTruthy();

          fixture.whenStable().then(() => {
            fixture.detectChanges();

            const stockItems = fixture.debugElement.queryAll(By.css('app-stock-item'));

            expect(stockItems.length).toEqual(2);

          });

      })
   );

  afterEach(() => {
    httpBackend.verify();
  });
});
