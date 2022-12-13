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

  //getAllSalesStand(): Observable<Product[]> {
  getAllSalesStand(){
    //return this.http.get<Product[]>(`${environment.url_api}/products`);
    return this.http.get<SalesStand []>(`${environment.urlApi}/api/allSalesStands`);
  }
  //getSalesStand(id: string): Observable<Product> {
  getSaleStand(id: string){
    //return this.http.get<Product>(`${environment.url_api}/products/${id}`);
    return this.http.get<SalesStand>(`${environment.urlApi}/api/SalesStand/$(id)`);
  }

  createSalesStand(body:any){
      return this.http.post(`${environment.urlApi}/api/createSale`, body);
  }

  getSaleStandByUser(id: Number){
    
    return this.http.get<SalesStand[]>(`${environment.urlApi}/api/saleStandsByUser/`+id);
  }

  // updateSalesStand(id: string, changes: Partial<Product>): any {
  //   return this.http.put(`${environment.url_api}/products/${id}`, changes);
  // }

  // deleteSalesStand(id: string): any {
  //   return this.http.delete(`${environment.url_api}/products/${id}`);
  // }

}
