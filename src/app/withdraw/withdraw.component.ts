import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../services/web3services.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
 
  public amount;

  constructor(public pro: Web3Service) { }

  ngOnInit() {
  }
  
  Withdraw(){
     this.pro.WithDraw(this.amount).then(res=>{})
  }
}
