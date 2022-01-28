import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockslistComponent } from './stockslist/stockslist.component';
import { StockComponent } from './stock/stock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkComponent } from './link/link.component';
import { NgxPlaidLinkModule } from "ngx-plaid-link";
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BalanceComponent } from './balance/balance.component';


@NgModule({
  declarations: [
    AppComponent,
    StockslistComponent,
    StockComponent,
    LinkComponent,
    TransactionsListComponent,
    TransactionComponent,
    SidebarComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPlaidLinkModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
