import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockslistComponent } from './stockslist/stockslist.component';

const routes: Routes = [{path:"", component:StockslistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
