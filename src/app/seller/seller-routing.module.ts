import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSalesStandComponent } from './components/list-sales-stand/list-sales-stand.component';
import { FormSaleComponent } from './components/form-sale/form-sale.component';
import { ReactiveFormsModule} from '@angular/forms'
const routes: Routes = [
  {
    path: 'showSaleStand',
    component: ListSalesStandComponent
  },
  {
    path: 'createSaleStand',
    component: FormSaleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
   
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class SellerRoutingModule { }
