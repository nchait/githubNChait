import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrowComponent } from './orow.component';

describe('OrowComponent', () => {
  let component: OrowComponent;
  let fixture: ComponentFixture<OrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
