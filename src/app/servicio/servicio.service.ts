import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'http://192.168.1.33:8080';

  constructor(private http: HttpClient) { }

  getFacturas(): Observable<any> {
    const url = `${this.apiUrl}/facturas`;
    return this.http.get<any>(url);
  }

  getProductosEnCarrito(): Observable<any> {
    const url = `${this.apiUrl}/productos_en_carrito`;
    return this.http.get<any>(url);
  }

  getTarjetasPago(): Observable<any> {
    const url = `${this.apiUrl}/clientes`;
    return this.http.get<any>(url);
  }
  

}
