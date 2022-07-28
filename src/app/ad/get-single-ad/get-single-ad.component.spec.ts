import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleAdComponent } from './get-single-ad.component';

describe('GetSingleAdComponent', () => {
  let component: GetSingleAdComponent;
  let fixture: ComponentFixture<GetSingleAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSingleAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSingleAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
