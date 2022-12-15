import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  inputSideNav!: MatSidenav; 
  user:any;
  permits:any;
  disabledButton:boolean;
  loginUser:boolean;
  
  constructor(
    public cookieService:CookieService,
    private router:Router,
    private observer:BreakpointObserver
  ) { 
    this.disabledButton = false;
    this.loginUser = true;
  }

  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser(){
    this.user=JSON.parse(localStorage.getItem("user")|| '{}');
    //this.permits=JSON.parse(localStorage.getItem("permits"))
    if(this.user.name==undefined){
      this.loginUser=true;     
    }else{
        this.loginUser=false;
        this.disabledButton=true;
    }
  }

  logout(){
    this.cookieService.delete('token','/','localhost',false,'Lax')
    localStorage.clear()
    // this.RequestService.post("api/auth/logout",{}).subscribe(r=>{
    //   console.log(r)
    // })
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });  
  }
}
