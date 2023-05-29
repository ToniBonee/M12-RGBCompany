import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { SessionService } from 'src/services/sessionService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private sessionSubscription: Subscription = new Subscription();

  constructor(private router: Router, private sessionService: SessionService) {}

  id_session: any;

  ngOnInit() {
    this.sessionSubscription = interval(10)
      .subscribe(() => {
        this.modifyHeader();
      });
  }

  ngOnDestroy() {
    if (this.sessionSubscription) {
      this.sessionSubscription.unsubscribe();
    }
  }

  modifyHeader() {
    //console.log(this.sessionService.getClientId());
    this.id_session = this.sessionService.getClientId();
  }

  navegarAComponente(fragment: string) {
    this.router.navigate(['/contacto'], { fragment: fragment });
  }

  showMenu: boolean = false;
  showSubMenu: boolean = false;

  menuOptions: { name: string; subOptions: string[] }[] = [
    {
      name: 'Opción 1',
      subOptions: ['SubOpción 1.1', 'SubOpción 1.2', 'SubOpción 1.3']
    },
    {
      name: 'Opción 2',
      subOptions: ['SubOpción 2.1', 'SubOpción 2.2', 'SubOpción 2.3']
    },
    {
      name: 'Opción 3',
      subOptions: ['SubOpción 3.1', 'SubOpción 3.2', 'SubOpción 3.3']
    }
  ];

  showMenu2: boolean = false;
  menuOptions2: string[] = ['Opción 4', 'Opción 5', 'Opción 6'];

  showMenu3: boolean = false;
  menuOptions3: string[] = ['Opción 7', 'Opción 8', 'Opción 9'];
}
