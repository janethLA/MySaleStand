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
  getSalesStand(id: string){
    //return this.http.get<Product>(`${environment.url_api}/products/${id}`);
    return this.http.get(`${environment.urlApi}/api/SalesStand/$(id)`);
  }
  createSalesStand(salesStand: any): any {
    return this.http.post(`${environment.urlApi}/api/SalesStand`, salesStand);
    //post('http://localhost:8080/api/product/createProduct/'+this.productForm.get('idCategory').value,salesStand)
  }
  // updateSalesStand(id: string, changes: Partial<Product>): any {
  //   return this.http.put(`${environment.url_api}/products/${id}`, changes);
  // }

  // deleteSalesStand(id: string): any {
  //   return this.http.delete(`${environment.url_api}/products/${id}`);
  // }

}
