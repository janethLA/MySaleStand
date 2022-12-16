import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

import { CookieService } from 'ngx-cookie-service';
import { interceptorProvider, } from './security/jwt-interceptor.interceptor';
import { FormSaleComponent } from './seller/components/form-sale/form-sale.component';
import { LoginComponent } from './auth/components/login/login.component';

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
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [CookieService,interceptorProvider]
})
export class AppRoutingModule { }
