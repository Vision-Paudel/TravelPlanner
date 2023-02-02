import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityLabelComponent } from './city-label.component';

describe('CityLabelComponent', () => {
  let component: CityLabelComponent;
  let fixture: ComponentFixture<CityLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
