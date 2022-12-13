import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalestandsComponent } from './components/salestands/salestands.component';

const routes: Routes = [
   {
    path: '',
    component: SalestandsComponent
   }
];
  
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SalesStandRoutingModule { }