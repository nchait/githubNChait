import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowroamingComponent } from './knowroaming.component';

describe('KnowroamingComponent', () => {
  let component: KnowroamingComponent;
  let fixture: ComponentFixture<KnowroamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowroamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowroamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
