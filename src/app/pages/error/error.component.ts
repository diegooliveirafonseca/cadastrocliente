import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {BackandService} from 'angular2bknd-sdk';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  title = 'app works!';

	constructor(private router: Router, private backandService:BackandService){
	    	this.backandService.setAppName('diegooliveira');
        this.backandService.setSignUpToken('ffee414d-f069-4fe6-b483-096e8e3fa86f');
       // this.backandService.setAnonymousToken('fbfdd4b6-db51-4e12-9477-338efb03c89f');
	}

	public navigate(url) {
		this.router.navigate([url]);
	}
}
