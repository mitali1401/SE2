import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSideComponentComponent } from './user-side-component.component';

describe('UserSideComponentComponent', () => {
  let component: UserSideComponentComponent;
  let fixture: ComponentFixture<UserSideComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSideComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
