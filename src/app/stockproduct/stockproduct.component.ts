import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../services/web3services.service';

@Component({
  selector: 'app-stockproduct',
  templateUrl: './stockproduct.component.html',
  styleUrls: ['./stockproduct.component.scss']
})
export class StockproductComponent implements OnInit {
  public details=[];
  public pid: number;
  public pname: string;
  public pbrand: string;
  public quantity: number;
  public price: number;
  constructor(private web3Service:Web3Service) { 
  }

  ngOnInit() {
    this.web3Service.getproductCount().then(product=>{
      product.forEach(element => {
        console.log(element);
        
        this.web3Service.ViewProduct(element).then(obj=>{
          console.log(obj);
          if(obj[1]!="")
          {
            this.details.push({"pid":obj[0],"pname":obj[1],"brand":obj[2],"quantity":obj[3],"price":obj[4],"date":obj[5]});
          }
        })
        
      });
    })
  }

}

