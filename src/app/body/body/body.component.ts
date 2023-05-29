import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from 'src/services/formServices';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  images: string[] = [
    '../../../assets/IMG/foto5.png'
  ];

  productos: Producto[] = [];
  stocks: Stock[] = [];
  marcas: Marca[] = [];
  cantidadProductos: number[] = [];

  constructor(private formService: FormsService, private router: Router) { }

  ngOnInit(): void {
    this.formService.GetLocalProducts().subscribe((productos: Producto[]) => {
      this.productos = productos;
      this.cantidadProductos = Array(this.productos.length).fill(1);
    });

    this.formService.GetLocalStocks().subscribe((stocks: Stock[]) => {
      this.stocks = stocks;
    });

    this.formService.GetLocalMarcas().subscribe((marcas: Marca[]) => {
      this.marcas = marcas;
    });
  }

  goToProduct(producto: Producto): void {
    const queryParams = {
      id_marca: producto.id_marca,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      imagen: producto.imagen,
      id_producto: producto.id_producto
    };
    this.router.navigate(['/infoProducto'], { queryParams });
  }

}

export interface Producto {
  id_producto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  generacion: string;
  imagen: string;
  id_marca: number;
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
