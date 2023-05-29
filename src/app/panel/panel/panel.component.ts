import { Component } from '@angular/core';
import { SessionService } from 'src/services/sessionService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
constructor(private router: Router, private sessionservice: SessionService){}
desconectar(){
  this.sessionservice.clearSession();
  this.router.navigate(['/body']);
}
}
