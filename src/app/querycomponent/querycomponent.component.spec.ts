import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerycomponentComponent } from './querycomponent.component';

describe('QuerycomponentComponent', () => {
  let component: QuerycomponentComponent;
  let fixture: ComponentFixture<QuerycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
