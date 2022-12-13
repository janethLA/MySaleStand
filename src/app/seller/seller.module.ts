import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { ListSalesStandComponent } from './components/list-sales-stand/list-sales-stand.component';
import { FormSaleComponent } from './components/form-sale/form-sale.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';;
import { SalesStandModule } from '../sales-stand/sales-stand.module';
import { SaleEditComponent } from './components/sale-edit/sale-edit.component';

@NgModule({
  declarations: [
    ListSalesStandComponent,
    FormSaleComponent,
    SaleEditComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    MaterialModule,
    RouterModule,
    SalesStandModule
  ]
})
export class SellerModule { }
