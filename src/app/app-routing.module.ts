import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ClienteComponent} from './cliente/cliente.component';
import {ItemComponent} from './item/item.component';
import {PedidoComponent} from './pedido/pedido.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'cliente', component:ClienteComponent},
    { path: 'item', component:ItemComponent},
    { path: 'pedido', component:PedidoComponent},
    { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class CadastroClienteAppRoutingModule { }
