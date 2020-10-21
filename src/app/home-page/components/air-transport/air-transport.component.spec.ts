import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirTransportComponent } from './air-transport.component';

describe('AirTransportComponent', () => {
  let component: AirTransportComponent;
  let fixture: ComponentFixture<AirTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
