import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {IProduct, products} from "../models/product";

@Injectable()
export class ProductService {
    get(): Observable<IProduct[]> {
        return of(products);
    }

    getById(productId: number) {
        return products.find(p => p.id === productId);
    }
}


