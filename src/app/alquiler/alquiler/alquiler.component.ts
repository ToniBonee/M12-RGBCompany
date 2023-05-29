import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from 'src/services/formServices';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent {
  productos: any[] = [];
  stocks: Stock[] = [];
  marcas: Marca[] = [];
  cantidadProductos: number[] = [];

  id_producto: any = "";
  nombre: any = "";
  descripcion: any = "";
  precio: number = 0;
  generacion: any = "";
  imagen: any = "";
 
  constructor(private formService: FormsService, private router: Router) { }

  ngOnInit(): void {
    this.getProd();
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

  getProd() {

    this.formService.getProd().subscribe(
      (data: any) => {
        
        this.productos = data;
       console.log(this.productos);
      },
      (error: any) => {
        console.log("No ha sido posible obtener las facturas.");
      }
    );
  }
  
  agregarAlCarrito(id_producto: number, cantidad: number) {
    const productoEnCarrito: ProductoEnCarrito = {
      id_producto: id_producto,
      cantidad: cantidad,
      id_cliente: 1, // Valor por defecto del cliente
      fecha_anadido: new Date(),
      fecha_expiracion: new Date()
    };

  }

}
export interface Producto { id_producto: number, nombre: string, descripcion: string, precio: number, generacion: string, imagen: String, id_marca: number; }

export interface Stock { id_stock: number, stock: number, id_producto: number, id_tipo_producto: number }

export interface Marca { id_marca: number, nombre: string }

export interface ProductoEnCarrito { id_producto: number, id_cliente: number, fecha_anadido: Date, fecha_expiracion: Date, cantidad: number }