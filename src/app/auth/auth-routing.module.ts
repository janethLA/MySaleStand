import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
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
export class AuthRoutingModule { }
