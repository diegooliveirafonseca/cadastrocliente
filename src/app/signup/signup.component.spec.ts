/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SignupComponent } from './signup.component';

describe('Component: Signup', () => {
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignupComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SignupComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

});
