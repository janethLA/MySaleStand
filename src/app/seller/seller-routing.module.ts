import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSalesStandComponent } from './components/list-sales-stand/list-sales-stand.component';
import { FormSaleComponent } from './components/form-sale/form-sale.component';
import { ReactiveFormsModule} from '@angular/forms'
import { SaleEditComponent } from './components/sale-edit/sale-edit.component';
import { UserGuard } from '../security/user.guard';
const routes: Routes = [
  {
    path: 'showSaleStand',
    component: ListSalesStandComponent,
    canActivate:[UserGuard]
  },
  {
    path: 'createSaleStand',
    component: FormSaleComponent,
    canActivate:[UserGuard]
  },
  {
    path: 'updateSaleStand/:id',
    component: SaleEditComponent,
    canActivate:[UserGuard]
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
