import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockslistComponent } from './stockslist/stockslist.component';
import { StockComponent } from './stock/stock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkComponent } from './link/link.component';


@NgModule({
  declarations: [
    AppComponent,
    StockslistComponent,
    StockComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
