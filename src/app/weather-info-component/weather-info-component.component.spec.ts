import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoComponentComponent } from './weather-info-component.component';

describe('WeatherInfoComponentComponent', () => {
  let component: WeatherInfoComponentComponent;
  let fixture: ComponentFixture<WeatherInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
