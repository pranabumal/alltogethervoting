import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  getName()
  {
    return this.product.name;
  }

  getPrice(){
    return this.product.price;
  }

}
