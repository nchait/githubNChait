import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripletButComponent } from './triplet-but.component';

describe('TripletButComponent', () => {
  let component: TripletButComponent;
  let fixture: ComponentFixture<TripletButComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripletButComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripletButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
