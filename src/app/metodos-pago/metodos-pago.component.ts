import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { SessionService } from 'src/services/sessionService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-metodos-pago',
  templateUrl: './metodos-pago.component.html',
  styleUrls: ['./metodos-pago.component.css']
})
export class MetodosPagoComponent implements OnInit {

  tarjetasPago: any[] = [];
  id_cliente: any;

  constructor(private servicioService: ServicioService, private sesionservice: SessionService , private sessionservice: SessionService, private router: Router ) { }

  ngOnInit() {
    this.id_cliente = this.sesionservice.getClientId();
    this.getTarjetasPago();
  }
  desconectar() {
    this.sessionservice.clearSession();
    this.router.navigate(['/body']);
  }
  
  getTarjetasPago() {
    const id_cliente = this.id_cliente; // Definir el id_cliente deseado

    this.servicioService.getTarjetasPago().subscribe(
      (data: any) => {
        const clientes = data;
        const cliente = clientes.find((c: any) => c.id_cliente === id_cliente);

        if (cliente && cliente.tarjetas_pago) {
          this.tarjetasPago = cliente.tarjetas_pago;
          console.log("Tarjetas de pago del cliente " + id_cliente + ":");
          console.log("Tarjetas: ", this.tarjetasPago);
        } else {
          console.log("No se encontraron tarjetas de pago para el cliente " + id_cliente);
        }
      },
      (error: any) => {
        console.log("No ha sido posible obtener las tarjetas de pago.");
      }
    );
  }
}
