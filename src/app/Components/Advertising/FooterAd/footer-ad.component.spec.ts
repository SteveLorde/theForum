import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAdComponent } from './footer-ad.component';

describe('FooterAdComponent', () => {
  let component: FooterAdComponent;
  let fixture: ComponentFixture<FooterAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterAdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
