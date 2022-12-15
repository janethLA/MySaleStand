import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  user:any;
  userLogued:boolean

  constructor(
    public cookieService:CookieService,
    private router:Router
  ) {
    this.userLogued = false;
   }

  ngOnInit(): void {
    this.loadDataUser();
  }

  loadDataUser(){
    this.user=JSON.parse(localStorage.getItem("user")|| '{}')
    if(this.user.name != undefined){
      this.userLogued = true;
    }
  }

  logout(){
    this.cookieService.delete('token','/','localhost',false,'Lax')
    localStorage.clear()
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });  
  }

}
