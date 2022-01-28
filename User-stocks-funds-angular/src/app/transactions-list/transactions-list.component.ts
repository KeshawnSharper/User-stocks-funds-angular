import { Component, OnInit,Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  value = new FormControl(""); 
  transactions:any = []
  searchedTransactions:any = []
  pages:any = []
  pagedTransactions:any = []
  currentPage:any = 1
  loadingTransactions:boolean = true
  constructor(private http:HttpClient) { }

  ngOnInit(){
    this.http.get<any>(`https://immense-ridge-09781.herokuapp.com/link_with_transactions/${localStorage.getItem('token')}`).subscribe(data => {
      this.transactions = data
    this.searchedTransactions = this.transactions
      this.pagintation()
      this.handlePage(1)
      this.loadingTransactions = false

    },
    err => {
      console.log(err)
      this.ngOnInit()
    }
    )
   
    

  }
  addNewTransaction(){
    this.transactions = [...this.transactions,{id:this.transactions.length,price:"0.00",company:"google",item:"Youtube premuim",date:new Date()}]
    this.searchedTransactions = this.transactions
    this.pagintation()
    this.handlePage(1)
  }
  searchTransactions = () => {
   if (this.value.value === ""){
      this.searchedTransactions = this.transactions
    }
    let filteredTransactions = this.transactions.filter((transaction:any) => transaction.name.toLowerCase().includes(this.value.value.toLowerCase()) )
    if (filteredTransactions.length === 0){
      this.searchedTransactions = this.transactions
    }
    else{
      this.searchedTransactions = filteredTransactions
    }
    this.pagintation()
    this.handlePage(1)
  }
  pagintation = () => {
    let pages_length = this.searchedTransactions.length % 4 !== 0 ? this.searchedTransactions.length / 4 + 1 : this.searchedTransactions.length / 4 
    this.pages = Array.from({length: pages_length}, (_, i) => i + 1)
  }
  handlePage(page:number){
    this.currentPage = page
    if (this.pages[-1] === page){
      this.pagedTransactions = this.searchedTransactions.slice(4 * (this.pages[-1] - 1));
    }
    else{
      console.log(this.searchedTransactions,this.pagedTransactions)
      this.pagedTransactions = this.searchedTransactions.slice(4 * (page - 1),page * 4);
      console.log(this.searchedTransactions,this.pagedTransactions)

      }
  }

}
