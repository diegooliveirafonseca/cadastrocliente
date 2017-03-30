/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {BackandService} from 'angular2bknd-sdk';

/*describe('Component: Login', () => {
  it('should create an instance', () => {
    let component = new LoginComponent((BackandService)backandSe);
    expect(component).toBeTruthy();
  });
});*/

describe('LoginComponent', () => {
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  }));
});