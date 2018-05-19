import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../services/web3services.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {
  public productid: number;
  public quantity : number;
  public price: number;
  public details=[];

  constructor(public pro: Web3Service) { }

  ngOnInit() {
    this.pro.getproductCount().then(product=>{
      product.forEach(element => {
        console.log(element);
        
        this.pro.ViewProduct(element).then(obj=>{
          console.log(obj);
          if(obj[3]==0 && obj[1]!="")
          {
            this.details.push({"pid":obj[0],"pname":obj[1],"brand":obj[2],"quantity":obj[3],"price":obj[4]});
          }
        })
        
      });
    })
  }
  Product(){
     this.pro.update_product(this.productid,this.quantity,this.price).then()
  }
}
  


