


import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { CreateStockDeactivateGuard } from './guards/create-stock-deactivate.guard';
import { StockLoadResolverService } from 'app/services/stock-load-resolver.service';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  { path: 'stock', loadChildren: 'app/stock/stock.module#StockModule' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: '**', redirectTo: 'user/register' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutesModule { }
