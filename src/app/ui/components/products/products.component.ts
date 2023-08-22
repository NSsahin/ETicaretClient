import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit{
  constructor ( spinner: NgxSpinnerService, private httpClientService: HttpClientService){
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService.get({
      controller: "products"
    }).subscribe(data => console.log(data));

    this.httpClientService.post({
      controller: "products"
    },{
      name:"Kalem",
      stock: 100,
      price: 15
    }).subscribe();
    
    this.httpClientService.post({
      controller: "products"
    },{
      name:"Kağıt",
      stock: 100,
      price: 50
    }).subscribe();

    this.httpClientService.post({
      controller: "products"
    },{
      name:"Silgi",
      stock: 50,
      price: 2.5
    }).subscribe();

    this.httpClientService.post({
      controller: "products"
    },{
      name:"Defter",
      stock: 100,
      price: 12
    }).subscribe();
  }
}

