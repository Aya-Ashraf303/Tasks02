import { Component, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../Service/products';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-products',
  imports: [ButtonModule ,CardModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  constructor(private _productService : ProductsService){}
  allProducts = signal<any[] | null>([])
ngOnInit(): void {
}
showAllProducts()
{
 this._productService.getAllProducts().subscribe(
    {
      next:(response)=>
      {

        this.allProducts.set(response.data)
        console.log(this.allProducts());
        
      }
    }
  )
}
resetData() {
  this.allProducts.set([]); 
  this._productService.resetProducts();
}
}
