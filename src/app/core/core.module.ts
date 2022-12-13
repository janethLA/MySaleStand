import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product/product.service';
import { SalestandService } from './services/salestand/salestand.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductService,
    SalestandService
  ]
})
export class CoreModule { }
