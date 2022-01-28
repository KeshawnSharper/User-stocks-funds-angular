import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { StockslistComponent } from './stockslist/stockslist.component';
import { LinkComponent } from './link/link.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

const routes: Routes = [
  { path:':access_token', component: LinkComponent },
{path:"home/transactions", component:TransactionsListComponent},
{path:"home/stocks",component:StockslistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
