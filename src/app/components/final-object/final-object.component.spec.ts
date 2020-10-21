import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalObjectComponent } from './final-object.component';

describe('FinalObjectComponent', () => {
  let component: FinalObjectComponent;
  let fixture: ComponentFixture<FinalObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
