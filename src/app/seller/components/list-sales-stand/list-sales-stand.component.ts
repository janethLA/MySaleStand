import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { SalestandService } from 'src/app/core/services/salestand/salestand.service';
import { SalesStand } from 'src/app/SalesStand.module';


@Component({
  selector: 'app-list-sales-stand',
  templateUrl: './list-sales-stand.component.html',
  styleUrls: ['./list-sales-stand.component.css']
})
export class ListSalesStandComponent implements OnInit {
  sales: SalesStand [] = [];
  user:any;

  constructor(
    private salestandService: SalestandService
  ) { }

  ngOnInit(): void {
    this.loadDataUser();
    this.fetchSaleStandsByUser();
  }

  loadDataUser(){
    this.user=JSON.parse(localStorage.getItem("user") || "{}")
  }

  fetchSaleStandsByUser(){
    this.salestandService.getSaleStandByUser(this.user.userId)
    .subscribe(sales => {
      console.log(sales);
      this.sales = sales;
    }) 
  }
  
}
