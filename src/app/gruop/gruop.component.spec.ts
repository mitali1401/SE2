import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruopComponent } from './gruop.component';

describe('GruopComponent', () => {
  let component: GruopComponent;
  let fixture: ComponentFixture<GruopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
