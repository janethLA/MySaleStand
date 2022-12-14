import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesStand } from 'src/app/SalesStand.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalestandService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllSalesStand(){
    return this.http.get<SalesStand []>(`${environment.urlApi}/api/allSalesStands`);
  }
  
  getSaleStand(id: Number){
    return this.http.get<SalesStand>(`${environment.urlApi}/api/SalesStand/`+id);
  }

  createSalesStand(body:any){
      return this.http.post(`${environment.urlApi}/api/createSale`, body);
  }

  getSaleStandByUser(id: Number){
    
    return this.http.get<SalesStand[]>(`${environment.urlApi}/api/saleStandsByUser/`+id);
  }

  // updateSalesStand(id: Number, changes: Partial<SalesStand>): any {
  //   return this.http.put(`${environment.urlApi}/products/`+id, changes);
  // }
  updateSalesStand(id: Number, body:any) {
    return this.http.put(`${environment.urlApi}/api/SalesStand/`+id, body);
  }

  deleteSalesStand(id: Number): any {
    return this.http.delete(`${environment.urlApi}/api/SalesStand/`+id);
  }

}
