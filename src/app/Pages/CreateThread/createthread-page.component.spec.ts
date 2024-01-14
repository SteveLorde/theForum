import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatethreadPageComponent } from './createthread-page.component';

describe('CreatethreadPageComponent', () => {
  let component: CreatethreadPageComponent;
  let fixture: ComponentFixture<CreatethreadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatethreadPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatethreadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
