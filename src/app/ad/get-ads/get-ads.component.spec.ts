import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdsComponent } from './get-ads.component';

describe('GetAdsComponent', () => {
  let component: GetAdsComponent;
  let fixture: ComponentFixture<GetAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
