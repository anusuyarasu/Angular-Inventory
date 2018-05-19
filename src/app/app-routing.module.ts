import { StockproductComponent } from './stockproduct/stockproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewcusOrderComponent } from './viewcus-order/viewcus-order.component';
import { TransferownershipComponent } from './transferownership/transferownership.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerpurchaseComponent } from './customerpurchase/customerpurchase.component'
import { CancelorderComponent } from './cancelorder/cancelorder.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'updateproduct',
    component: UpdateproductComponent
  },
  {
    path: 'viewcoustomerorder',
    component: ViewcusOrderComponent
  },
  {
    path: 'stockproduct',
    component: StockproductComponent
  },
  {
    path: 'transferowner',
    component: TransferownershipComponent
  },
  {
    path: 'withdraw',
    component: WithdrawComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'customerpurchase',
    component: CustomerpurchaseComponent
  },
  {
    path: 'cancelorder',
    component: CancelorderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
