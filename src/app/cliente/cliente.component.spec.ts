import { TestBed, async } from '@angular/core/testing'; 

import { ClienteComponent } from './cliente.component';

describe('ClienteComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClienteComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ClienteComponent);
    const appCliente = fixture.debugElement.componentInstance;
    expect(appCliente).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(ClienteComponent);
    const appCliente = fixture.debugElement.componentInstance;
    expect(appCliente.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ClienteComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
