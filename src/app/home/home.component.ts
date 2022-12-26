import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductService} from "../shared/product.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent  {
    products$ = this.productService.get()

    constructor(private productService: ProductService) {
    }
}
