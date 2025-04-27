import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { ProductTableComponent } from "../product-table/product-table.component";

@Component({
  selector: 'app-filterable-product-table',
  standalone: true,
  imports: [SearchBarComponent, ProductTableComponent],
  templateUrl: './filterable-product-table.component.html',
  styleUrl: './filterable-product-table.component.css'
})
export class FilterableProductTableComponent {

}
