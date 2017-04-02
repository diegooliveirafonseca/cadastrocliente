import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CadastroClienteAppRoutingModule} from './app-routing.module';

import { TextMaskModule } from 'angular2-text-mask';
import {BackandService} from 'angular2bknd-sdk';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ClienteComponent} from './cliente/cliente.component';
import {ItemComponent} from './item/item.component';
import {PedidoComponent} from './pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ClienteComponent,
    ItemComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TextMaskModule, 
    MaterialModule,
    CadastroClienteAppRoutingModule
  ],
  providers: [BackandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
