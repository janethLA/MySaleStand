import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


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
  disabledButton:boolean=false;
  constructor(
    private router:Router,
    private observer:BreakpointObserver
  ) { }

  ngOnInit(): void {
    
  }

  // logout(){
  //   this.router.navigate(['/']).then(() => {
  //     window.location.reload();
  //   });
    
  // }

}
