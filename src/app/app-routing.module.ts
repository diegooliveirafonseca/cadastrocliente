import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ClienteComponent} from './cliente/cliente.component';
import {ItemComponent} from './item/item.component';
import {PedidoComponent} from './pedido/pedido.component';
import {ErrorComponent} from './pages/error/error.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'cliente', component:ClienteComponent},
    { path: 'item', component:ItemComponent},
    { path: 'pedido', component:PedidoComponent},
    { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class CadastroClienteAppRoutingModule { }

export const rotasSistema = [
  provideRoutes(routes)
];