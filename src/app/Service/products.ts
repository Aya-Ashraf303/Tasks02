import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  constructor(private _httpClient : HttpClient){}

    $products : Observable<any>|null =null;

   //Using ShareReplay()
  getAllProducts():Observable<any> 
  {    
    
      this.$products = this._httpClient.get('https://ecommerce.routemisr.com/api/v1/products').pipe(shareReplay())    
    return this.$products
  }

  resetProducts()
  {
    this.$products=null
  }

}
