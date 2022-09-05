import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { CartService } from 'src/app/Service/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  

  constructor(private api : ApiService,private cartService : CartService) { }

  public productList :any;

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res =>{
      this.productList = res;

      this.productList.forEach((a:any) => {
      
        Object.assign(a,{quantity:1,total:a.price});
      })
    });
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}
