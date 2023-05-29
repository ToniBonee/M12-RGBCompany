import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BodyComponent } from './body/body/body.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsService } from 'src/services/formServices';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { CompraComponent } from './compra/compra.component';
import { MuestraComponent } from './muestra/muestra.component';
import { SessionService } from 'src/services/sessionService';
import { ContactoComponent } from './contacto/contacto.component';
import { infoProducto } from './infoProducto/infoProducto.component';
import { CreatupcComponent } from './creatupc/creatupc.component';
import { UsersService } from 'src/users/users.service';
import { AlquilerComponent } from './alquiler/alquiler/alquiler.component';
import { PalquilerComponent } from './palquiler/palquiler/palquiler.component';
import { PanelComponent } from './panel/panel/panel.component';
import { MetodosPagoComponent } from './metodos-pago/metodos-pago.component';
import { TuCarroComponent } from './tu-carro/tu-carro.component';
import { ComprasPanelComponent } from './compras-panel/compras-panel.component';
import { PagoTarjetaComponent } from './pagoTarjeta/pago-tarjeta/pago-tarjeta.component';
import { DatosEnvioComponent } from './datosEnvio/datos-envio/datos-envio.component';
import { CambiaAvatarComponent } from './cambia-avatar/cambia-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    CompraComponent,
    MuestraComponent,
    ContactoComponent,
    infoProducto,
    CreatupcComponent,
    AlquilerComponent,
    PalquilerComponent,
    PanelComponent,
    MetodosPagoComponent,
    TuCarroComponent,
    ComprasPanelComponent,
    PagoTarjetaComponent,
    DatosEnvioComponent,
    CambiaAvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
   
  ],
  providers: [FormsService, UsersService , SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
