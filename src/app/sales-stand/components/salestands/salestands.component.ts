import { Component, OnInit } from '@angular/core';
import { SalestandService } from 'src/app/core/services/salestand/salestand.service';
import { SalesStand } from 'src/app/SalesStand.module';

@Component({
  selector: 'app-salestands',
  templateUrl: './salestands.component.html',
  styleUrls: ['./salestands.component.css']
})
export class SalestandsComponent implements OnInit {

  sales: SalesStand [] = [];
  constructor(
    private salestandService: SalestandService
  ) { }

  ngOnInit(): void {
    this.fetchSalesStands();
  }

  fetchSalesStands(){
    this.salestandService.getAllSalesStand()
    .subscribe(sales => {
      console.log(sales);
      this.sales = sales;
    }) 
  }

  // createSalesStand(){
  //   this.salestandService.createSalesStand(sales)
  //   .subscribe(sale =>{
  //     console.log(sale);
  //   })
  //}
  

}
