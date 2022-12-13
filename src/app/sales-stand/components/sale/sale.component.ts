import { Component, Input } from '@angular/core';
import { SalesStand } from 'src/app/SalesStand.module';
import { MatDialog , MatDialogRef} from '@angular/material/dialog';


// @Component({
//   selector: 'dialog-animations-example-dialog',
//   templateUrl: 'dialog-animations-example-dialog.html',
// })
// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
// }

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {

   @Input() sales: SalesStand;
   @Input() boolEdit:boolean;
   @Input() boolDelete:boolean;
   constructor( ){
    this.boolEdit=false;
    this.boolDelete=false
   
   }
  
   ngOnInit(): void {
    this.sales.image="data:image/jpg;base64,"+this.sales.image;
   }
    // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    //   this.dialog.open(DialogAnimationsExampleDialog, {
    //     width: '250px',
    //     enterAnimationDuration,
    //     exitAnimationDuration,
    //   });
    // }
}
