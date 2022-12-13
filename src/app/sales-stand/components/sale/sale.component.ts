import { Component, Input } from '@angular/core';
import { SalesStand } from 'src/app/SalesStand.module';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {

   @Input() sales: SalesStand;
   @Input() boolEdit:boolean;
   @Input() boolDelete:boolean;
   constructor(){
    this.boolEdit=false;
    this.boolDelete=false
   }
  
   ngOnInit(): void {
    this.sales.image="data:image/jpg;base64,"+this.sales.image;
    
  }
}
