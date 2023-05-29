import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/services/sessionService';


@Component({
  selector: 'app-tu-carro',
  templateUrl: './tu-carro.component.html',
  styleUrls: ['./tu-carro.component.css']
})
export class TuCarroComponent implements OnInit {
  productosEnCarrito: any[] = [];
  id_cliente: any;

  constructor(
    private servicioService: ServicioService,
    private router: Router,
    private sessionservice: SessionService
  ) { }

  ngOnInit() {
    this.id_cliente = this.sessionservice.getClientId();
    this.getProductosEnCarritoCliente();
  }

  getProductosEnCarritoCliente() {
    const id_cliente = this.id_cliente; // Definir el id_cliente deseado
  
    this.servicioService.getProductosEnCarrito().subscribe(
      (data: any) => {
        this.productosEnCarrito = data;
        console.table("Productos en el carrito:", this.productosEnCarrito);
        // Lógica para abrir el modal y mostrar los productos
      },
      (error: any) => {
        console.log("No ha sido posible obtener los productos en el carrito.");
      }
    );
  }

  desconectar() {
    this.sessionservice.clearSession();
    this.router.navigate(['/body']);
  }
}