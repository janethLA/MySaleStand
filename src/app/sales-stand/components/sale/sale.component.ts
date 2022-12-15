import { Component, Input } from '@angular/core';
import { SalesStand } from 'src/app/SalesStand.module';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { SalestandService } from 'src/app/core/services/salestand/salestand.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {

   @Input() sale: SalesStand;
   @Input() boolEdit:boolean;
   @Input() boolDelete:boolean;
   constructor( 
    public dialog: MatDialog,
    private salestandService: SalestandService,
    private snack:MatSnackBar,
    private router:Router
    ){
    this.boolEdit=false;
    this.boolDelete=false;
   
   }
  
   ngOnInit(): void {
    this.sale.image="data:image/jpg;base64,"+this.sale.image;
   }

   openDialog():void{
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      width: '250px',
      data:"El puesto de venta: "+this.sale.salesStandName
    });

    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
      if(res){
        this.salestandService.deleteSalesStand(this.sale.id).subscribe({
          next:()=>{
            this.snack.open('Puesto de Venta eliminado  exitosamente.','CERRAR',
            {duration:5000,panelClass:'snackSuccess',})
            this.router.navigate(['/seller/showSaleStand']).then(() => {
            window.location.reload();
            });
                
          },
          error:()=>{
            this.snack.open('Fallo al eliminar el Puesto de Venta','CERRAR',{duration:5000});
            
          }
          })
      }
    })
   }
   
}
