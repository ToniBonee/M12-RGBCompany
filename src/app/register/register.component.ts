import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UsersService } from 'src/users/users.service';
import { SessionService } from 'src/services/sessionService';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('contrasena') elementcontrasena!: ElementRef;
  @ViewChild('email') elementemail!: ElementRef;

  FormLogin: Logins[] = [];

  test_post: string = '';
  error: string = '';
  error2: string = '';


  @ViewChild('Rcontrasena') elementRcontrasena!: ElementRef;

  FormRegister: Register[] = [];

  id_cliente: FormControl = new FormControl('');
  usuario: FormControl = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]);
  nombre: FormControl = new FormControl('', [Validators.required, Validators.pattern('[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*')]);
  correo: FormControl = new FormControl('', [Validators.required, Validators.pattern(/.+@.+\..+/)]);
  telefono: FormControl = new FormControl('', [Validators.minLength(9), Validators.maxLength(10), Validators.pattern('[0-9]+')]);
  contrasena: FormControl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
  rol: FormControl = new FormControl(1);
  imagen: FormControl = new FormControl(1);
  estado_cuenta: FormControl = new FormControl(1);

  Form: FormGroup = new FormGroup({
    id_cliente: this.id_cliente,
    usuario: this.usuario,
    nombre: this.nombre,
    correo: this.correo,
    telefono: this.telefono,
    contrasena: this.contrasena,
    rol: this.rol,
    imagen: this.imagen,
    estado_cuenta: this.estado_cuenta

  });


  constructor(private userService: UsersService, private http: UsersService, private router: Router,  private sessionService: SessionService) { }


  register(Form: FormGroup) {
    console.log(this.nombre.value);
    console.log(Form);
    this.http.register(Form).subscribe(data => {
      this.test_post = data.nombre.value;
    }, error => this.error2 = error);

  }


  login(): void {
    for (let i = 0; i < this.FormLogin.length; i++) {
      if (
        this.FormLogin[i] && this.FormLogin[i].correo == this.elementemail.nativeElement.value && this.FormLogin[i].contrasena == this.elementcontrasena.nativeElement.value && this.FormLogin[i].estado_cuenta == 1 ) {
        console.log("¡Ingreso exitoso!");
        console.log(this.FormLogin[i].id_cliente); 
        this.router.navigate(['/body']);
        this.sessionService.setClientId(this.FormLogin[i].id_cliente);
  
        return;
      }
    }
    console.log("Correo electrónico o contraseña incorrectos.");
  }



  ngOnInit() {
    this.userService.getForms().subscribe((FormLogin: Logins[]) => {
      this.FormLogin = FormLogin;
      this.userService.getForms();
    });

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton?.addEventListener('click', () => {
      container?.classList.add("right-panel-active");
    });

    signInButton?.addEventListener('click', () => {
      container?.classList.remove("right-panel-active");
    });


  }

}

export interface Register {
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