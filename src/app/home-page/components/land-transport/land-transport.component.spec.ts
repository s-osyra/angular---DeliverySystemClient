import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandTransportComponent } from './land-transport.component';

describe('LandTransportComponent', () => {
  let component: LandTransportComponent;
  let fixture: ComponentFixture<LandTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
