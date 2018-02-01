import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastcallComponent } from './lastcall.component';

describe('LastcallComponent', () => {
  let component: LastcallComponent;
  let fixture: ComponentFixture<LastcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastcallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
