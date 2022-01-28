import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  balance:any = 0

  constructor(private http:HttpClient) { }
  ngOnInit(){
    
      this.http.get<any>(`https://immense-ridge-09781.herokuapp.com/link_with_balance/${localStorage.getItem('token')}`).subscribe(data => {
        data.map((item:any,i:any) => this.balance += item.balances.current)
this.balance = this.balance.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})
      
      })
    }
  

}
