import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective,FormGroup, FormControl,Validators } from '@angular/forms';
import { SalestandService } from 'src/app/core/services/salestand/salestand.service';
import { ElementRef, ViewChild, Renderer2 } from '@angular/core'
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private salestandService: SalestandService
  ) { }

  dataFile:any;
  fileName = '';
  formData = new FormData();

  saleForm= this.formBuilder.group({
    salesStandName:['',[Validators.required]],
    address:['',[Validators.required]],
    description:['',[Validators.required]],
    // longitude:['',[Validators.required]],
    // latitude:['',[Validators.required]],
    id:['',[Validators.required]],
    image:['',[Validators.required]]
    
  });
  ngOnInit(): void {
    
  }
  
  // saveProduct(saleForm:any, formDirective: FormGroupDirective){
  //   this.salestandService.createSalesStand(this.formData).subscribe({
  //     next:()=>{
  //       this.snack.open('Categoria registrada exitosamente.','CERRAR',{duration:5000,panelClass:'snackSuccess',})
  //      window.location.reload();
  //      /* console.log(category)
  //      console.log('http://localhost:8080/api/category/createCategory/'+this.idStore)
  //    */
  //     },
  //     error:()=>{
  //       this.snack.open('Fallo al registrar la categoria','CERRAR',{duration:5000});
        
  //     }
  //   })
  // }

  // onFileSelected(event:any) {
  //   const image:File = event.target.files[0];
  //   //console.log(file, event);
  //   if (image) {
  //     this.fileName = image.name;
  //     const formD = new FormData();
  //     formD.append("image", image);
  //     this.saleForm.get('image')?.setValue(image);
  //     formD.append("salesStandName",this.saleForm.get('salesStandName')?.value);
  //     formD.append("address",this.saleForm.get('address')?.value);
  //     formD.append("description",this.saleForm.get('description')?.value);
  //    // formD.append("id",this.saleForm.get('price')?.value);
  //     //console.log("formData",formD);
  //     this.formData=formD;
  //    }
  // }
  // replace:boolean=false;
  // disalbedInput(){
  //   let disabled:boolean=false;
  //   if(this.dataFile!=null){
  //     disabled=true;
  //   }
  //   if(this.replace==true){
  //     disabled=false;
  //   }
  //   return disabled;
  // }
}