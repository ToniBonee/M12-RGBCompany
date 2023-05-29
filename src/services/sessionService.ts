import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class SessionService {
  private readonly CLIENT_ID_KEY = 'client_id';
  private readonly ROLE_KEY = 'role';

  constructor() { }

  setClientId(clientId: number): void {
    sessionStorage.setItem(this.CLIENT_ID_KEY, clientId.toString());
  }
  private sesionSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  sesion$: Observable<any> = this.sesionSubject.asObservable();

  iniciarSesion(datosSesion: any) {
    // Lógica para iniciar sesión...
    this.sesionSubject.next(datosSesion);
  }
  getClientId(): number | null {
    const clientId = sessionStorage.getItem(this.CLIENT_ID_KEY);
    return clientId ? parseInt(clientId, 10) : null;
  }

  setRole(role: string): void {
    sessionStorage.setItem(this.ROLE_KEY, role);
  }

  getRole(): string | null {
    return sessionStorage.getItem(this.ROLE_KEY);
  }

  clearSession(): void {
    sessionStorage.removeItem(this.CLIENT_ID_KEY);
    sessionStorage.removeItem(this.ROLE_KEY);
  }
}
