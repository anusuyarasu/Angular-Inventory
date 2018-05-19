import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../services/web3services.service';

@Component({
  selector: 'app-customerpurchase',
  templateUrl: './customerpurchase.component.html',
  styleUrls: ['./customerpurchase.component.scss']
})
export class CustomerpurchaseComponent implements OnInit {
  public productid;
  public quantity;
  public price;
  public details=[];
  public list=[];

  constructor(public pro: Web3Service) { }

  ngOnInit() {
    this.pro.getproductCount().then(product=>{
      product.forEach(element => {
        console.log(element);
        
        this.pro.ViewProduct(element).then(obj=>{
          console.log(obj);
          if(obj[1]!="")
          {
            this.details.push({"pid":obj[0],"pname":obj[1],"brand":obj[2],"quantity":obj[3],"price":obj[4],"date":obj});
          }
        })
        
      });
    })
    this.pro.getCustomerCount().then(order=>{
      order.forEach(element => {
          this.pro.ViewCustomer(element).then(obj=>{
           if(obj[3]!=""){
              this.list.push({"oid":obj[0],"pid":obj[1],"cusid":obj[2],"pname":obj[3],"quantity":obj[5],"price":obj[6],"date":obj[7]});
           }       
         })         
      });
    })
  }

  order(){
     this.pro.order(this.productid,this.quantity,this.price).then(res=>{})
  }
  
  
}
