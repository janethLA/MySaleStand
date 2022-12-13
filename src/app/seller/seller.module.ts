import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { ListSalesStandComponent } from './components/list-sales-stand/list-sales-stand.component';
import { FormSaleComponent } from './components/form-sale/form-sale.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListSalesStandComponent,
    FormSaleComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    MaterialModule,
    RouterModule
  ]
})
export class SellerModule { }
