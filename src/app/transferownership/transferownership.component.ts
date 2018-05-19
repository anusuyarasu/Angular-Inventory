import { Component, OnInit } from '@angular/core';

import { Web3Service } from '../services/web3services.service';

@Component({
  selector: 'app-transferownership',
  templateUrl: './transferownership.component.html',
  styleUrls: ['./transferownership.component.scss']
})
export class TransferownershipComponent implements OnInit {

  public address:string; 

  constructor(public pro: Web3Service) { }

  ngOnInit() {
  }
  transfer(){
    console.log(this.address);
     this.pro.TransferownerShip(this.address).then(res=>{})
  }
}
