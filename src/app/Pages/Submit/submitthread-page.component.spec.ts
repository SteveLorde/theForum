import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitthreadPageComponent } from './submitthread-page.component';

describe('SubmitthreadPageComponent', () => {
  let component: SubmitthreadPageComponent;
  let fixture: ComponentFixture<SubmitthreadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitthreadPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitthreadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
