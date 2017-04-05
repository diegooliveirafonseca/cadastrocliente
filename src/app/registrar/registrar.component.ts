import { Component, OnInit } from '@angular/core';
import {BackandService} from 'angular2bknd-sdk';
import 'rxjs/Rx';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  ngOnInit() {
  }

email:string = '';
  firstName:string = '';
  lastName:string = '';
  signUpPassword: string = '';
  confirmPassword: string = '';

  constructor(private backandService:BackandService) {


  }

  public signUp() {
    if (this.signUpPassword != this.confirmPassword){
      alert('As senhas não conferem');
      return;
    }
    var $obs = this.backandService.signup(this.email, this.signUpPassword, this.confirmPassword, this.firstName, this.lastName);
    $obs.subscribe(                
      data => {
          alert('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
      },
      err => {
          this.backandService.logError(err)
      },
      () => console.log('Finish Auth'));
  }

  
}
