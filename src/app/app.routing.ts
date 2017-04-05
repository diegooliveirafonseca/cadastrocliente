import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ErrorComponent } from './pages/error/error.component';
import { ItemComponent } from './item/item.component';
import { PedidoComponent } from './pedido/pedido.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'item', component: ItemComponent },
    { path: 'pedido', component: PedidoComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: '**', component: ErrorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

//canActivate: [AuthGuard] 

//*ngIf="mostrarMenu"  app.component.html