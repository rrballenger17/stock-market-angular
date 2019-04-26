import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../app/model/stock';
import { StockService } from '../../../app/services/stock.service';
import { MessageService } from '../../../app/services/message.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
providers: [MessageService]   
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private stockService: StockService,
              public messageService: MessageService) {   1
    this.stock =  new Stock('', '', 0, 0, 'NASDAQ');
    this.messageService.message = 'Component Level: Hello Message Service'; 
  }

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }


    createStock(stockForm) {
      if (stockForm.valid) {
        this.stockService.createStock(this.stock)
            .subscribe((result: any) => {    1
              this.messageService.message= result.msg;
              this.stock =  new Stock('', '', 0, 0, 'NASDAQ');
            }, (err) => {
              this.messageService.message = err.msg;
            });
      } else {
        console.error('Stock form is in an invalid state');
      }
    }

}

