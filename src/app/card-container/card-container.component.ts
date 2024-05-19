import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBlockComponent } from '../card-block/card-block.component';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [CommonModule, CardBlockComponent],
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit{

  constructor() 
  {
    // this.str="Hello world";
    // console.log('constructor');
  }

  products: { id: number, name: string, price: number, description: string, color: string }[] = [
    { id: 1, name: 'product 1', price: 110, description: 'product1 text description', color: 'red'},
    { id: 2, name: 'product 2', price: 120, description: 'product2 text description', color: 'yellow' },
    { id: 3, name: 'product 3', price: 130, description: 'product3 text description', color: 'green' }
  ];

  selectedProduct: any = null;

  showDetails(product: any) {
    this.selectedProduct = product;
  }

  ngOnInit(){
    for(let product of this.products){
      product.price -= 15;
    }
  }

  // str:string ='';
  // ngOnInit()
  // {
  //   this.str ="ngOnInit";
  //   console.log('ngOnInit');
  // }
  // ngDoCheck()
  // {
  //   this.str ="ngDoCheck";
  //   console.log('ngDoCheck');
  // }
  // ngAfterContentInit()
  // {
  //   console.log('ngAfterContentInit');
  // }
}
