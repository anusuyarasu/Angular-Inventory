
  import { Injectable } from '@angular/core';

  import * as Web3 from 'web3';
  import { promise } from 'protractor';
  
  declare let require: any;
  declare let window: any;
  
  let inventoryabi = require('../inventory.json');
  
  @Injectable()
  export class Web3Service 
  {
  
    private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = "0x639219ad89c76ca0deea174eaa4d605dd9088d7d";

  constructor() { 
    if (typeof window.web3 !== 'undefined') { 
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);
    } 
    else 
    {
      console.warn("Please use a dapp browser like mist or MetaMask plugin for chrome");
    }
    this._web3.version.getNetwork((err,netId)=>
      {
        switch(netId)
        {
          case "1":
            console.log('This is mainnet');
            break;
          case "2":
            console.log('This is deprecated Morden test network');
            break;
          case "3":
            console.log('This is ropsten test network');
            break;
          case "4":
            console.log('This is the Rinkeby test network');
          case "42":
            console.log('This is the kovan test network');
            break;
          default:
            console.log('This is an unknown network.');
        }	
      });
    this._tokenContract = this._web3.eth.contract(inventoryabi).at(this._tokenContractAddress);
  }
  

//getAccount details
private async getAccount(): Promise<string> {
  if (this._account == null) {
    this._account = await new Promise((resolve, reject) => {
      this._web3.eth.getAccounts((err, accs) => {
        if (err != null) {
          alert('There was an error fetching your accounts.');
          return;
        }

        if (accs.length === 0) {
          alert(
            'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
          );
          return;
        }
        resolve(accs[0]);
      })
    }) as string;

    this._web3.eth.defaultAccount = this._account;
  }

  return Promise.resolve(this._account);
}

  //getBalance
  public async getUserBalance(): Promise<number> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.getbalance.call( function (err, result) {
        if(err != null) {
          reject(err);
        }
  
        resolve(_web3.fromWei(result));
      });
    }) as Promise<number>;
  }

  //Add Product
  public async Product(a,b,c,d): Promise<any> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.p_details(a,b,c,d,{from:account,gas: 600000},function (err, result) {
        if(err != null) {
          reject(err);
        }
  
       resolve((result));
      });
    }) as Promise<any>;
  }

  //getProductCount
  public async getproductCount(): Promise<any> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.productCount({from:account,gas: 600000},function (err, result) {
        if(err != null) {
          reject(err);
        }
        const arr:number[] = [];
        for(var i=0;i<= result.toNumber();i++){
          arr.push(i);
      }
      resolve(arr);
     });
    }) as Promise<number[]>;
  }

  //Viewproduct
  public async ViewProduct(pid): Promise<object> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.viewproduct.call(pid,{from:account,gas: 600000},function (err, result) {
        if(err != null) {
          reject(err);
        }
        result[0] = result[0].toNumber();
        var t= new Date(result[5]*1000);
        result[5]=t;
                 resolve(result);
     });
    }) as Promise<object>;
  }

  //updateproduct
  public async update_product(a,b,c): Promise<object> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.update_product(a,b,c,{from:account,gas: 600000},function (err, result) {
        if(err != null) {
          reject(err);
        }
         resolve(result);
     });
    }) as Promise<object>;
  }

  //getCustomerCount
  public async getCustomerCount(): Promise<any> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.ordercount({from:account,gas: 600000},function (err, result) {
        if(err != null) {
          reject(err);
        }
        const arr:number[] = [];
        for(var i=0;i<= result.toNumber();i++){
          arr.push(i);
      }
      resolve(arr);
     });
    }) as Promise<number[]>;
  }

  //viewcustomer
  public async ViewCustomer(oid): Promise<object> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.ORDER .call(oid,{from:account,gas: 600000},function (err, result) {
        if(err != null) {
          reject(err);
        }
        //if(result[1]==account)
      result[0] = result[0].toNumber();
      result[6]=_web3.fromWei(result[6],"ether");
      var t= new Date(result[7]*1000);
      result[7]=t.toUTCString();
      resolve(result);
     });
    }) as Promise<object>;
  }

  //transferOwnership
  public async TransferownerShip(address): Promise<any> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.transferOwnership(address,{from:account,gas: 600000},function (err, result) {
        if(err != null) {
          reject(err);
        }
         resolve(result);
     });
    }) as Promise<any>;
  }
  
//Withdraw
public async WithDraw(amount): Promise<any> {
  let account = await this.getAccount();

  return new Promise((resolve, reject) => {
    let _web3 = this._web3;
    this._tokenContract.withdraw(amount,{from:account,gas: 600000},function (err, result) {
      if(err != null) {
        reject(err);
      }
       resolve(result);
   });
  }) as Promise<any>;
}

//order
public async order(a,b,c): Promise<any> {
  let account = await this.getAccount();

  return new Promise((resolve, reject) => {
    let _web3 = this._web3;
    this._tokenContract.order(a,b,{from:account,value:_web3.toWei(c,"ether"),gas: 600000},function (err, result) {
      if(err != null) {
        reject(err);
      }
       resolve(result);
   });
  }) as Promise<any>;
}

//cancelorder
public async cancel(a,b): Promise<any> {
  let account = await this.getAccount();

  return new Promise((resolve, reject) => {
    let _web3 = this._web3;
    this._tokenContract.ordercancel(a,b,{from:account,gas: 600000},function (err, result) {
      if(err != null) {
        reject(err);
      }
       resolve(result);
   });
  }) as Promise<any>;
}
public async checking(): Promise<any> {
  let account = await this.getAccount();

  return new Promise((resolve, reject) => {
    let _web3 = this._web3;
    this._tokenContract.owner({from:account,gas: 600000},function (err, result) {
      0
      if(err != null) {
        reject(err);
      }
       resolve(result);
       
       
   });
  }) as Promise<any>;
}


}

     
   
   
     

  
  
  