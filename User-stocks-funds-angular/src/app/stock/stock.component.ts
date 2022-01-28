import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  @Input() stock: any
  @Input() removeStock:any
  @Input() changeStock:any
  @Input() stocks: any
  price:any 

  constructor(private http:HttpClient) { }
  getStockData = () => {
    this.http.get<any>(`https://yahoo-finance-api.vercel.app/${this.stock.company}`).subscribe(data => {
    let meta = data.chart.result[0].meta  
    let updatedStock = {id:this.stock.id,prev_price:meta.previousClose,company:this.stock.company,price:meta.regularMarketPrice} 
    this.changeStock(updatedStock)
    this.price = updatedStock.price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
      this.stock = updatedStock
      
  })
}
    // Loop through each stock in the stocks state and change it's value         
  ngOnInit(){
    if (this.stocks.filter((stock:any) => stock === this.stock).length !== 0){
    this.getStockData()
    setInterval(() => {
      this.getStockData()
  },5000)
  }
  }
}
