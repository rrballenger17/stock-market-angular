import { Component, OnInit } from '@angular/core';
import { Stock } from '../app/model/stock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Stock Market App';

  public stock: Stock; 

  public counter: number = 1;

  ngOnInit(): void{ 
  	// this.stock = new Stock('Clear View Glass Company - ' + this.counter++, 'CVG', 105, 80); 
    this.stock = new Stock('Test Stock Company' , 'TSC' , 85 , 80);
    console.log('App Component On Init'); 
  } 

  onToggleFavorite(stockInput: Stock){
  	this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject(){
    this.stock = new Stock('Test Stock Company 2 - ' +this.counter++, 'TSC2', 22, 13);
  }

  changeStockPrice(){
    this.stock.price += 10;
  }

  testMethod(){
    console.log("Test method in AppComponent triggered");
  }



}
