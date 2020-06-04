import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveComponentComponent } from './leave-component.component';

describe('LeaveComponentComponent', () => {
  let component: LeaveComponentComponent;
  let fixture: ComponentFixture<LeaveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
