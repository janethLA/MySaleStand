import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './components/sale/sale.component';
import { MaterialModule } from '../material/material.module';
import { SalestandsComponent } from './components/salestands/salestands.component';
import { SalesStandRoutingModule } from './sales-stand-routing.module';

@NgModule({
  declarations: [
    SaleComponent,
    SalestandsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SalesStandRoutingModule
  ]
})
export class SalesStandModule { 
  
}
