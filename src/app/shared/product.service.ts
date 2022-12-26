import {Injectable} from '@angular/core';
import {IProduct, Product, products} from "../models/product";
import {map, Observable, of} from "rxjs";

@Injectable()
export class ProductService {
    get(): Observable<IProduct[]> {
        const products = products.map(p => new Product(p.id, p.title,
            p.price, p.rating, p.description, p.categories));
        return of(products).pipe(map(products => products ?? []));
    }

    getById(productId: number) {
        return products.find(p => p.id === productId);
    }
}


