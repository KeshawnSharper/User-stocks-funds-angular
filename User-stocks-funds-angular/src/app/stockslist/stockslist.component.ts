import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Symbols from "./symbolList"
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-stockslist',
  templateUrl: './stockslist.component.html',
  styleUrls: ['./stockslist.component.css']
})
export class StockslistComponent implements OnInit {
  symbols = Symbols 
  stocks : any = []
  searched_stock = new FormControl(""); 
  access_token:any
  pages:any = []
  searchedStocks : any = []
  currentPage = 1
  pagedStocks:any = []

  constructor(private http:HttpClient,private route: ActivatedRoute) { }

  ngOnInit(){
  //   this.access_token = this.route.snapshot.paramMap.get('access_token');
  //   this.http.get(`http://localhost:3000/link_with_transactions/${this.access_token}`).subscribe(data => {
  //   console.log(data)
      
  // })
  if (localStorage.getItem("stocks")){
  this.http.post<any>(`https://immense-ridge-09781.herokuapp.com/get_saved_stocks`,{data:localStorage.getItem('stocks')}).subscribe(data => {
    this.stocks = data
    this.syncStocks()
  })
}
  }
  syncStocks = () => {
    let pages = this.pages
    this.searchedStocks= this.stocks
    this.pagintation()
    if (pages !== this.pages){
      this.currentPage = this.pages[this.pages.length - 1]
    }
    this.handlePage(this.currentPage)
    localStorage.setItem("stocks",JSON.stringify(this.stocks))
  }
  pagintation = () => {
    let pages_length = this.searchedStocks.length % 6 !== 0 ? this.searchedStocks.length / 6 + 1 : this.searchedStocks.length / 6
    this.pages = Array.from({length: pages_length}, (_, i) => i + 1)
  }
  handlePage = (page:number) => {
    this.currentPage = page
    if (this.pages[-1] === page){
      this.pagedStocks = this.searchedStocks.slice(6 * (this.pages[-1] - 1));
    }
    else{
      this.pagedStocks = this.searchedStocks.slice(6 * (page - 1),page * 6);
      }
  }
  addNewStock = () => {
    if (this.symbols.filter((symbol:any) => symbol.label === this.searched_stock.value.toUpperCase()).length === 0)
    {
      alert("stock doesn't exist please pick from dropdown")
      return
    }
    this.stocks = [...this.stocks,{id:this.stocks.length > 0 ? this.stocks[this.stocks.length - 1].id +  1 : 0,prev_price:-500,company:this.searched_stock.value,price:-500}]
    this.searched_stock.setValue("")
this.syncStocks()
} 
removeStock = (id:any) => {
  let stocks = [...this.stocks]
  this.stocks = this.stocks.filter((stock:any) => stock.id !== id)
  this.syncStocks()
}
changeStock(stock:any){
  // get the index of the stock that im changing
  // map
  const newData = this.stocks.map((obj:any) => {
    if(obj.id === stock.id) {return stock}
    return obj
  })
  
  this.stocks = newData 
  

}
}
