import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceComponentComponent } from './attendance-component.component';

describe('AttendanceComponentComponent', () => {
  let component: AttendanceComponentComponent;
  let fixture: ComponentFixture<AttendanceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
