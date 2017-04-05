import { Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BackandService } from 'angular2bknd-sdk'
import { LoginComponent } from './../login/login.component';

@Injectable()
export class AuthGuard implements CanActivate {
mostrar: boolean = false;

  constructor(
    private backandService: BackandService,
    private router: Router,
    private login : LoginComponent
  ) { }

canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) : Observable<boolean> | boolean {

mostrar => this.login.usuarioEstaAutenticado();

 console.log('status Auth GUardRecebido: ' +this.mostrar)
 
 return;


}

}

