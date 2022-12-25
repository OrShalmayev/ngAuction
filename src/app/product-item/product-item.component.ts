import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product} from "../shared/product.service";

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {
    @Input() product!: Product;

    constructor() {
    }

    ngOnInit(): void {
    }

}
