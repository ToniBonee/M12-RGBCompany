import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable()
export class FormsService {

  productos: Producto[] = [];
  stock: Stock[] = [];
  
  private urlProductos = "http://192.168.1.33:8080/productos";
  private urlStock = "http://192.168.1.33:8080/stocks";
  private urlMarcas = "http://192.168.1.33:8080/marcas";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  producto: any[] = [ ];
  
  constructor(private http: HttpClient) { }
  getProductoById(idProducto: string): Observable<any> {
    const producto = this.producto.find(prod => prod.id_producto === idProducto);
    return of(producto);
  }
  GetLocalProducts(): Observable<any> {
    return this.http.get<any>(this.urlProductos);
  }
getProd(): Observable<any> {
  const url = `${this.urlProductos}`;
  return this.http.get<any>(url);
}
  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlProductos)
      .pipe(
        catchError((err) => {
          console.log('error');
          console.error(err);
          return throwError(err);
        })
      );
    }

  GetLocalStocks(): Observable<any> {
    return this.http.get<any>(this.urlStock);
  }

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.urlStock)
      .pipe(
        catchError((err) => {
          console.log('error');
          console.error(err);
          return throwError(err);
        })
      );
  }

  GetLocalMarcas(): Observable<any> {
    return this.http.get<any>(this.urlMarcas);
  }

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.urlMarcas)
      .pipe(
        catchError((err) => {
          console.log('error');
          console.error(err);
          return throwError(err);
        })
      );
  }

}

export interface Producto {
  id_producto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  generacion: string;
  imagen: string;
}

export interface Stock {
  id_stock: number;
  stock: number;
  id_producto: number;
  id_tipo_producto: number;
}

export interface Marca {
  id_marca: number;
  nombre: string;
}

export interface ProductoEnCarrito {
  id_producto: number;
  id_cliente: number;
  fecha_anadido: Date;
  fecha_expiracion: Date;
  cantidad: number;
}