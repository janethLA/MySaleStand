import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  title = 'MySalesStand';
  @ViewChild('sideNav') sidenav!:MatSidenav;

  constructor(private observer:BreakpointObserver){
     
  }
  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe(res=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
       /*  this.sidenav.mode='side';
        this.sidenav.toggle();   */
      }
  })
  }
}
