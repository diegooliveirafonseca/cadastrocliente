import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { MaterialModule } from '@angular/material';
import { BackandService } from 'angular2bknd-sdk';
import { RegistrarComponent } from './registrar/registrar.component';
import { ItemComponent } from './item/item.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AuthGuard } from './guards/auth.guard';

//import {CadastroClienteAppRoutingModule} from './app.routing';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    ItemComponent,
    PedidoComponent,
    ErrorComponent,
    HomeComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule
  ],
  providers: [BackandService,AuthGuard,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
