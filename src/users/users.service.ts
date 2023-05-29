import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, throwError } from 'rxjs';
import { Form, FormGroup } from "@angular/forms";
import { of } from 'rxjs';
import { Register } from 'src/app/register/register.component';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private apiUrl = 'http://192.168.1.33:8080/clientes';
  Register: Registers[] = [ ];
  Login: Logins[] = [ ];

  constructor(private http: HttpClient) { }

 login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}`;
    const body = { email, password };
    return this.http.post<any>(url, body, { headers });
  }

  getForms(): Observable<Logins[]> {
    return this.http.get<Logins[]>(this.apiUrl)
      .pipe(
        catchError((err) => {
            console.log('error')
            console.error(err);
            return throwError(err);
        })
      );
  }

  
sendForms(id_cliente: number, usuario: string, nombre: string,  correo: string, telefono: number,  contrasena: string,  rol: number,  imagen: string, estado_cuenta: number):Observable<Register[]>{
    if(  nombre != null){
        this.Register.push({ id_cliente: id_cliente, usuario: usuario, nombre: nombre,  correo: correo, telefono: telefono,  contrasena: contrasena,  rol: rol,  imagen: imagen, estado_cuenta: estado_cuenta});
    }
    return of(this.Register);

   }
  register(Register: FormGroup): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}`;
    return this.http.post<any>(url, Register, { headers });
  }
}
export interface Registers {
  id_cliente: number,
  usuario: string,
  nombre: string,
  correo: string,
  telefono: number,
  contrasena: string,
  rol: number,
  imagen: string,
  estado_cuenta: number;
}
export interface Logins {
  id_cliente: number,
  usuario: string,
  nombre: string,
  correo: string,
  telefono: number,
  contrasena: string,
  rol: number,
  imagen: string,
  estado_cuenta: number;
}