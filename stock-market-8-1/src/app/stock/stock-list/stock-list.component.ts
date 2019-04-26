import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service' ; 
import { Stock } from '../../model/stock' ;
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
/** Imports skipped for brevity **/
export class StockListComponent implements OnInit {

  public stocks$: Observable<Stock[]>;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stocks$ = this.stockService.getStocks();
  }

  onToggleFavorite(stock: Stock) {
    this.stockService.toggleFavorite(stock);
  }
}
