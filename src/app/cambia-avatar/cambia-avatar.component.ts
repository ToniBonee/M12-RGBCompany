import { Component } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { SessionService } from 'src/services/sessionService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambia-avatar',
  templateUrl: './cambia-avatar.component.html',
  styleUrls: ['./cambia-avatar.component.css']
})
export class CambiaAvatarComponent {
  id_cliente: any;
  constructor( private sessionservice: SessionService,
    private router: Router) { }

  ngOnInit() { 
    this.id_cliente = this.sessionservice.getClientId();
   
   
  }

  desconectar() {
    this.sessionservice.clearSession();
    this.router.navigate(['/body']);
  }

}
