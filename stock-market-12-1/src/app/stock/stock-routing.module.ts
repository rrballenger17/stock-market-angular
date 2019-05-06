
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';
import { AuthGuard } from 'app/guards/auth.guard';
import { CreateStockComponent }
    from './create-stock/create-stock.component';

import { CreateStockDeactivateGuard } from 'app/guards/create-stock-deactivate.guard';



import { StockDetailsComponent }
    from './stock-details/stock-details.component';
import { StockLoadResolverService }
    from 'app/services/stock-load-resolver.service';

const routes: Routes = [
  { path: 'list', component: StockListComponent,
    canActivate: [AuthGuard] },
  { path: 'create', component: CreateStockComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CreateStockDeactivateGuard] },
  { path: ':code', component: StockDetailsComponent,
    canActivate: [AuthGuard],
    resolve: { stock: StockLoadResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }




