import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { FormSaleComponent } from './seller/components/form-sale/form-sale.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./sales-stand/sales-stand.module').then(m => m.SalesStandModule)
      },
      {
        path: 'seller',
        loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule)
      }
      // {
      //   path: 'home',
      //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      // },
      // {
      //   path: 'products',
      //   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      // },
      // {
      //   path: 'contact',
      //   loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      // },
      // {
      //   path: 'order',
      //   loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      // },
    ]
  },

  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
