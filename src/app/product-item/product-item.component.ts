import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../models/product";

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {
    @Input() product!: IProduct;

    constructor() {
    }

    ngOnInit(): void {
    }

}
