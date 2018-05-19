import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../services/web3services.service';

@Component({
  selector: 'app-cancelorder',
  templateUrl: './cancelorder.component.html',
  styleUrls: ['./cancelorder.component.scss']
})
export class CancelorderComponent implements OnInit {
 
  public list=[];
  
  constructor(public pro: Web3Service) { }
  
  ngOnInit() {
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
  cancel(a,b){
      
           this.pro.cancel(a,b).then(res=>{})
        
  }
  


}
