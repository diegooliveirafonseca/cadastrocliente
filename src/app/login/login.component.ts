import { Component, OnInit } from '@angular/core';
import { BackandService } from 'angular2bknd-sdk'
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

    ngOnInit() {
    }

    username: string = '';
    password: string = '';
    auth_type: string = "N/A";
    is_auth_error: boolean ;
    auth_status: string = null;
    loggedInUser: string = '';
    usuarioAutenticado: boolean;



    constructor(private backandService: BackandService, private router: Router) {
        this.auth_type = backandService.getAuthType();
        this.auth_status = backandService.getAuthStatus();
        this.loggedInUser = backandService.getUsername();

    }

    public getAuthTokenSimple() {
        this.auth_type = 'Token';
        var $obs = this.backandService.signin(this.username, this.password);
        $obs.subscribe(
            data => {
                this.auth_status = 'OK';
                this.is_auth_error = false;
                this.loggedInUser = this.username;
                this.username = '';
                this.password = '';
                this.usuarioAutenticado = true;
                this.router.navigate(['/cliente']);
                console.log('Logado');
            },
            err => {
                var errorMessage = this.backandService.extractErrorMessage(err);
                this.auth_status = `Error: ${errorMessage}`;
                this.is_auth_error = true;
                this.backandService.logError(err);
            },
            () => console.log('Autenticação Finalizada e usuarioAutenticado= '+this.usuarioAutenticado));
    }

    public signOut() {
        this.auth_status = null;
        this.backandService.signout();
    }

   public usuarioEstaAutenticado() {
         console.log('usuarioAutenticado' +this.usuarioAutenticado)
        return this.usuarioAutenticado
    }



}
