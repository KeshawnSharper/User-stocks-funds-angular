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
    console.log(this.stocks)
    this.stocks = [...this.stocks,{id:this.stocks.length > 0 ? this.stocks[this.stocks.length - 1].id +  1 : 0,prev_price:-500,company:this.searched_stock.value,price:-500}]
    this.searched_stock.setValue("")
    console.log(this.stocks)
} 
removeStock = (id:any) => {
  let stocks = [...this.stocks]
  console.log(id,stocks)
  this.stocks = this.stocks.filter((stock:any) => stock.id !== id)
}
changeStock(stock:any){
  // get the index of the stock that im changing
  // map
  console.log(this.stocks,stock)
  const newData = this.stocks.map((obj:any) => {
    if(obj.id === stock.id) {return stock}
    return obj
  })
  
  this.stocks = newData 
  

}
}
