import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirepowerComponent } from './firepower.component';

describe('FirepowerComponent', () => {
  let component: FirepowerComponent;
  let fixture: ComponentFixture<FirepowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirepowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirepowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
