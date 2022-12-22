import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective,FormGroup, FormControl,Validators } from '@angular/forms';
import { SalestandService } from 'src/app/core/services/salestand/salestand.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'

export interface coordenada{
  longitud:number;
  latitud:number;
}

@Component({
  selector: 'app-form-sale',
  templateUrl: './form-sale.component.html',
  styleUrls: ['./form-sale.component.css']
})
export class FormSaleComponent implements OnInit {
  
  constructor(
    private formBuilder: FormBuilder,
    private snack:MatSnackBar,
    private salestandService: SalestandService,
    private router:Router
  ) { }

  dataFile:any;
  fileName = '';
  user:any;
  formData = new FormData();

  saleForm= this.formBuilder.group({
    salesStandName:['',[Validators.minLength(3),Validators.required]],
    address:['',[Validators.minLength(5),Validators.required]],
    description:['',[Validators.minLength(5),Validators.required]],
    // longitude:['',[Validators.required]],
    // latitude:['',[Validators.required]],
    //id:['',[Validators.required]],
    image:['',[Validators.required]]
    
  });

  ngOnInit(): void {
    this.loadDataUser();
  }

  saveSale(){
    this.salestandService.createSalesStand(this.formData).subscribe({
      next:()=>{
        this.snack.open('Puesto de Venta registrada exitosamente.','CERRAR',{duration:5000,panelClass:'snackSuccess',})
        this.router.navigate(['/seller/showSaleStand']).then(() => {
        window.location.reload();
        });
            
      },
      error:()=>{
        this.snack.open('Fallo al registrar el Puesto de Venta','CERRAR',{duration:5000});
        
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
      formD.append("salesStandName",this.saleForm.get('salesStandName')?.value);
      formD.append("address",this.saleForm.get('address')?.value);
      formD.append("description",this.saleForm.get('description')?.value);
      formD.append("longitude","12345");
      formD.append("latitude","125637");
      formD.append("UserId",this.user.userId);
      console.log("formData",formD);
      console.log(formD.get('description')?.valueOf);
      this.formData=formD;
     }
  }
  loadDataUser(){
    this.user=JSON.parse(localStorage.getItem("user") || "{}")
  }
}