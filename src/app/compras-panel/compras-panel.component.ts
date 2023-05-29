import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { SessionService } from 'src/services/sessionService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-compras-panel',
  templateUrl: './compras-panel.component.html',
  styleUrls: ['./compras-panel.component.css']
})
export class ComprasPanelComponent implements OnInit{

  facturas: any[] = [];
  id_cliente: any;
  factura_cliente: any;

  constructor(private servicioService: ServicioService, private sessionservice: SessionService,
    private router: Router) { }

  ngOnInit() { 
    this.id_cliente = this.sessionservice.getClientId();
    this.getFacturas();
   
  }

  desconectar() {
    this.sessionservice.clearSession();
    this.router.navigate(['/body']);
  }

  getFacturas() {
    const id_cliente = this.id_cliente; // Definir el id_cliente deseado

    this.servicioService.getFacturas().subscribe(
      (data: any) => {
        this.facturas = data;
        for (let i = 0; i < this.facturas.length; i++) {
          if (this.facturas[i].id_cliente === id_cliente) {
            const factura_cliente = this.facturas[i].numero_factura;
            console.log("Factura del cliente " + id_cliente + ":", factura_cliente);

            const lineasFacturas = this.facturas[i].lineas_facturas;
            console.log("Lineas de Facturas del cliente " + id_cliente + ":", lineasFacturas);

            for (let j = 0; j < lineasFacturas.length; j++) {
              const productos = lineasFacturas[j].productos;
              console.log("Producto " + (j + 1) + " del cliente " + id_cliente + ":");

              console.log("Nombre: " + productos.nombre);
              console.log("Precio: " + productos.precio);
              console.log("Descripción: " + productos.descripcion);
              console.log("Categoría: " + productos.categoria);
              // Mostrar otras propiedades del objeto productos si las tiene

              const tipos_productos = productos.tipos_productos;
              console.log("Tipos de productos del producto " + (j + 1) + " del cliente " + id_cliente + ":");

              console.log("Tipo ID: " + tipos_productos.id_tipo_producto);
              console.log("Tipo Producto Nombre: " + tipos_productos.tipo_producto);
              // Mostrar otras propiedades del objeto tipos_productos si las tiene
            }
          }
        }

        this.facturas = this.facturas.filter(factura => factura.id_cliente === id_cliente);
        if (this.facturas.length > 0) {
          console.log("Facturas:", this.facturas);
          console.log("ID:", this.facturas[0].id_cliente);
        }
      },
      (error: any) => {
        console.log("No ha sido posible obtener las facturas.");
      }
    );
  }

}
