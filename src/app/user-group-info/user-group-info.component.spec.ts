import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupInfoComponent } from './user-group-info.component';

describe('UserGroupInfoComponent', () => {
  let component: UserGroupInfoComponent;
  let fixture: ComponentFixture<UserGroupInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
