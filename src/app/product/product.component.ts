import { Component, OnInit,NgModule } from '@angular/core';


//import { product } from '../shared/product'
import { Web3Service } from '../services/web3services.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})




export class ProductComponent implements OnInit {
  
  public model={};
  public productname;
  public brand;
  public quantity;
  public amount;
 

  constructor(private web3Service:Web3Service) { }
  

  ngOnInit() {
  }
  submit(){
      this.web3Service.Product(this.productname,this.brand,this.quantity,this.amount).then((res)=>{      
    });
  }
}


