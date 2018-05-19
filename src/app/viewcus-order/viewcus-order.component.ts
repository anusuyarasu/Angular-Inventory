import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../services/web3services.service';

@Component({
  selector: 'app-viewcus-order',
  templateUrl: './viewcus-order.component.html',
  styleUrls: ['./viewcus-order.component.scss']
})
export class ViewcusOrderComponent implements OnInit {
  public details=[];
  constructor(private web3Service:Web3Service) { }

  ngOnInit() {
     this.web3Service.getCustomerCount().then(order=>{
       order.forEach(element => {
           this.web3Service.ViewCustomer(element).then(obj=>{
             if(obj[8]==1){
               var a="ORDERED"
             }
             else{
               var a="CANCELLED"
             }
            if(obj[3]!=""){
              this.details.push({"oid":obj[0],"pid":obj[1],"cusid":obj[2],"pname":obj[3],"quantity":obj[5],"price":obj[6],"date":obj[7],"status":a});
            }

          })         
       });
     })
  }

}
