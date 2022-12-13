import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { SalestandService } from 'src/app/core/services/salestand/salestand.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router,ActivatedRoute, Params } from '@angular/router'
import { SalesStand } from 'src/app/SalesStand.module';

@Component({
  selector: 'app-sale-edit',
  templateUrl: './sale-edit.component.html',
  styleUrls: ['./sale-edit.component.css']
})
export class SaleEditComponent implements OnInit {

  dataFile:any;
  fileName = '';
  formData = new FormData();
  id:Number;
  formD = new FormData();
  constructor(
    private formBuilder: FormBuilder,
    private snack:MatSnackBar,
    private salestandService: SalestandService,
    private router:Router,
    private activeRoute: ActivatedRoute,
  ) { }

  saleForm= this.formBuilder.group({
    salesStandName:['',[Validators.required]],
    address:['',[Validators.required]],
    description:['',[Validators.required]],
    // longitude:['',[Validators.required]],
    // latitude:['',[Validators.required]],
    //id:['',[Validators.required]],
    
  });

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.salestandService.getSaleStand(this.id)
      .subscribe((salesStand: SalesStand) => {
        this.saleForm.patchValue(salesStand);
        this.formD.append("salesStandName",this.saleForm.get('salesStandName')?.value);
        this.formD.append("address",this.saleForm.get('address')?.value);
        this.formD.append("description",this.saleForm.get('description')?.value);
        this.formD.append("longitude","12345");
        this.formD.append("latitude","125637");
        this.formD.append("UserId","2");
        this.formData=this.formD;
      })
    })
  }

  saveSale(){
    console.log("formData",this.formData);
    this.salestandService.updateSalesStand(this.id,this.formData).subscribe({
      next:()=>{
        this.snack.open('Puesto de Venta actualizado exitosamente.','CERRAR',{duration:100000,panelClass:'snackSuccess',})
        this.router.navigate(['/seller/showSaleStand']).then(() => {
        window.location.reload();
        });
            
      },
      error:()=>{
        this.snack.open('Fallo al actualizar el Puesto de Venta','CERRAR',{duration:20000});
        
      }
      })
  }

  onFileSelected(event:any) {
    const image:File = event.target.files[0];
    console.log(image, event);
    if (image) {
      this.fileName = image.name;
      const formD = new FormData();
      formD.append("image", image);
      this.saleForm.get('image')?.setValue(image);
      this.formData=this.formD;
     }
  }

}
