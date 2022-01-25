import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockslist',
  templateUrl: './stockslist.component.html',
  styleUrls: ['./stockslist.component.css']
})
export class StockslistComponent implements OnInit {
  stocks = [1,2,3,4,5]
  constructor() { }

  ngOnInit(): void {
  }

}
