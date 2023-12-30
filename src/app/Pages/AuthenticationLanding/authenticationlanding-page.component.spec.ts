import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationlandingPageComponent } from './authenticationlanding-page.component';

describe('AuthenticationlandingPageComponent', () => {
  let component: AuthenticationlandingPageComponent;
  let fixture: ComponentFixture<AuthenticationlandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationlandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthenticationlandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
