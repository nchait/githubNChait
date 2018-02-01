import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalvedComponent } from './halved.component';

describe('HalvedComponent', () => {
  let component: HalvedComponent;
  let fixture: ComponentFixture<HalvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
