import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService, Producto, Stock, Marca } from 'src/services/formServices';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-infoProducto',
  templateUrl: './infoProducto.component.html',
  styleUrls: ['./infoProducto.component.css']
})
export class infoProducto implements OnInit  {

  //producto:any[] = [ ];
  //id:any;

  productos: Producto[] = [];
  stocks: Stock[] = [];
  marcas: Marca[] = [];
  cantidadProductos: number[] = [];

  nombre: any;
  descripcion: any;
  precio: any;
  imagen: any;
  id_marca: any

  constructor(private formService: FormsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    /*this.id = +this.route.snapshot.params['id_producto'];
    console.log(this.id);
    this.formService.getProductoById(this.id).subscribe((producto: any) => {
      this.producto = producto;
    });*/

    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.precio = params['precio'];
      this.descripcion = params['descripcion'];
      this.imagen = params['imagen'];
    });

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
 
 
}
