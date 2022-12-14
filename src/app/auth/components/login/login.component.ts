import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public idUser:any;
  public user:any={};
  public userName:any;
  public errorLogin:boolean;
  
    loginForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
   
    constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private cookieService: CookieService,
      private router: Router,
      public dialog: MatDialog,
      private sanitizer: DomSanitizer
    ) { 
    }
    hide=true;
    expiryMessage:string;
    dataConfiguration:any;
    ngOnInit(): void {
  
    }
    
    onLogin(login:any){
      this.errorLogin=false;
      console.log(login)
      this.authService.onLogin(login)
      .subscribe( {
        next:(respuesta:any)=>{
          console.log(respuesta)
          // const dateNow = new Date();
          // dateNow.setMinutes(dateNow.getMinutes() + 60);
          // this.cookieService.set('token',respuesta.jwt,dateNow)
          // this.cookieService.set('identifier',respuesta.identifier,dateNow)
          // if(respuesta.id!=undefined){
          //   this.idUser=respuesta.id 
          // }else{
          //   this.idUser=respuesta.idFinalUser;
          // }
          
          // this.expiryMessage=respuesta.expiryMessage;
          // this.userName=respuesta.userName;
          // console.log(this.user)
          // this.user={idUser:this.idUser,userName:this.userName,name:respuesta.name}
          // this.saveDataUser(respuesta.roles);
          //this.sendRoute(respuesta.identifier)
          
          // this.router.navigate(['/']).then(() => {
          //   window.location.reload();
          // });
         },
        error:()=>{
          //this.loginForm.reset();
          console.log("error");
          this.errorLogin=true;
        }
      });
        
    }
    
    saveDataUser(roles:any){
      localStorage.setItem("user",JSON.stringify(this.user));
      localStorage.setItem("permits",JSON.stringify(roles));
      localStorage.setItem("expiryMessage",JSON.stringify(this.expiryMessage));
    
    }
}
