import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 

import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SalesStandModule } from '../sales-stand/sales-stand.module';

import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';




@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidenavComponent,
    ConfirmDialogComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SalesStandModule
  ]
})
export class SharedModule { }
