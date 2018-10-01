import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
//import 'rxjs/Rx'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  private imgUrl = "https://via.placeholder.com/300x300";

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .subscribe(value => {
        this.keyword = value;
        //console.log(this.keyword)
      });
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}


