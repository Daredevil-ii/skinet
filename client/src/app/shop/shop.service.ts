import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Pagination} from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:7019/api/';
  constructor(private http: HttpClient) { }
  getProducts (shopParams: ShopParams) {
    let params = new HttpParams();
    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }
    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString()); 
    }
    if(shopParams.search) {
      params = params.append('search', shopParams.search);
    }
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageIndex', shopParams.pageSize.toString());
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', {params});
  }
  getProduct(id: number) {
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }
  getBrands () {
    return this.http.get<IBrand[]>(this.baseUrl +'products/brands');
  }
  getTypes () {
    return this.http.get<IType[]>(this.baseUrl +'products/types');
  }
}