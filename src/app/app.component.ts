import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductTableComponent } from "./product-table/product-table.component";
import { FilterableProductTableComponent } from "./filterable-product-table/filterable-product-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductTableComponent, FilterableProductTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'search-table-angular';
}
