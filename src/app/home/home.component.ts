import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductService} from "../shared/product.service";
import {trackByIndex} from "../shared/utils/track-by.utils";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent  {
    products$ = this.productService.get()
    trackByIndex = trackByIndex()
    constructor(private productService: ProductService) {
    }
}
