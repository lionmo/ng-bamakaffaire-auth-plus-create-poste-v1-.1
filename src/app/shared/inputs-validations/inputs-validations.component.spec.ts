import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsValidationsComponent } from './inputs-validations.component';

describe('InputsValidationsComponent', () => {
  let component: InputsValidationsComponent;
  let fixture: ComponentFixture<InputsValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsValidationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
