import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackandService } from 'angular2bknd-sdk';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BackandService]
})

export class AppComponent {

  routeLinks: any[];
  activeLinkIndex = 0;
  status: string = '';
  mostrar: boolean = false;
  mostrarMenu: boolean = false;

  constructor(private router: Router, private backandService: BackandService, private login: LoginComponent) {
    this.routeLinks = [
      { label: 'Home', link: 'home' },
      { label: 'Login', link: 'login' },
      { label: 'Cliente', link: 'cliente' },
      { label: 'Item', link: 'item' },
      { label: 'Pedido', link: 'pedido' },      
      { label: 'Registrar', link: 'registrar' }];
     this.backandService.setAppName('diegooliveira');
     this.backandService.setSignUpToken('ffee414d-f069-4fe6-b483-096e8e3fa86f');
  }

  ngOnInit() {
  
}

}