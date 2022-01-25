import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Symbols from "./symbolList"

@Component({
  selector: 'app-stockslist',
  templateUrl: './stockslist.component.html',
  styleUrls: ['./stockslist.component.css']
})
export class StockslistComponent implements OnInit {
  symbols = Symbols 
  stocks : any = []
  searched_stock = new FormControl(""); 
  constructor() { }

  ngOnInit(): void {
  }
  addNewStock = () => {
    this.stocks = [...this.stocks,{id:this.stocks.length > 0 ? this.stocks[this.stocks.length - 1].id +  1 : 0,prev_price:-500,company:this.searched_stock.value,price:-500}]
    this.searched_stock.setValue("")
} 
}
