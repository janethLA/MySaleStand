import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:any={};
  public errorLogin:boolean;
  public hide:boolean;
  
    loginForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
   
    constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private cookieService: CookieService,
      private router: Router,
      public dialog: MatDialog
    ) { 
      this.hide=true;
    }

    ngOnInit(): void {
      
    }
    
    onLogin(login:any){
      this.errorLogin=false;
      this.authService.onLogin(login)
      .subscribe( {
        next:(respuesta:any)=>{
          const dateNow = new Date();
          dateNow.setMinutes(dateNow.getMinutes() + 30);
          this.cookieService.set('token',respuesta.token, dateNow)
          this.user={userId:respuesta.idUser,name:respuesta.name,rol:respuesta.rol}
          this.saveDataUser();
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          }); 
         },
        error:()=>{
          console.log("error");
          this.errorLogin=true;
        }
      });
        
    }
    
    saveDataUser(){
      localStorage.setItem("user",JSON.stringify(this.user));
    }
}
