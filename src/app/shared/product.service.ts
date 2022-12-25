import {Injectable} from '@angular/core';
import {IProduct, Product, products} from "../models/product";

@Injectable()
export class ProductService {
    get(): IProduct[] {
        return products.map(p => new Product(p.id, p.title,
            p.price, p.rating, p.description, p.categories));
    }

    getById(productId: number) {
        return products.find(p => p.id === productId);
    }
}


