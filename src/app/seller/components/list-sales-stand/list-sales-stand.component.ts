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

  constructor(
    private salestandService: SalestandService
  ) { }
  ngOnInit(): void {
    this.fetchSaleStandsByUser();
  }

  fetchSaleStandsByUser(){
    this.salestandService.getSaleStandByUser(2)
    .subscribe(sales => {
      console.log(sales);
      this.sales = sales;
    }) 
  }
  
}
