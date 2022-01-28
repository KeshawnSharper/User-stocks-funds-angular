import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  @Input() transaction: any
  price:any 
  constructor() { }

  ngOnInit(){
    this.price = this.transaction.amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

}
