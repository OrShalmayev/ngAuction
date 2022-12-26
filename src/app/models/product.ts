export interface IProduct {
    id: number,
    title: string,
    price: number,
    rating: number,
    description: string,
    categories: string[]
}

export class Product implements IProduct {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public description: string,
        public categories: string[]) {
    }
}
export const products: IProduct[] = [
    {
        'id': 0,
        'title': 'First Product',
        'price': 24.99,
        'rating': 4.3,
        'description': 'This is a short description.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'categories': ['electronics', 'hardware']
    }, {
        'id': 1,
        'title': 'Second Product',
        'price': 64.99,
        'rating': 3.5,
        'description': 'This is a short description.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'categories': ['books']
    }
];
