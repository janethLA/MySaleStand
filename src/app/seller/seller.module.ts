import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { ListSalesStandComponent } from './components/list-sales-stand/list-sales-stand.component';
import { FormSaleComponent } from './components/form-sale/form-sale.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';;
import { SalesStandModule } from '../sales-stand/sales-stand.module';

@NgModule({
  declarations: [
    ListSalesStandComponent,
    FormSaleComponent
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
