import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewcusOrderComponent } from './viewcus-order/viewcus-order.component';
import { StockproductComponent } from './stockproduct/stockproduct.component';
import { TransferownershipComponent } from './transferownership/transferownership.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import{ Web3Service} from './services/web3services.service';
import { CustomerComponent } from './customer/customer.component';
import { CustomerpurchaseComponent } from './customerpurchase/customerpurchase.component'
import { CancelorderComponent } from './cancelorder/cancelorder.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateproductComponent,
    ViewcusOrderComponent,
    StockproductComponent,
    TransferownershipComponent,
    WithdrawComponent,
    CustomerComponent,
    CustomerpurchaseComponent,
    CancelorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [Web3Service],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
