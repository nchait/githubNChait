import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbytComponent } from './tbyt.component';

describe('TbytComponent', () => {
  let component: TbytComponent;
  let fixture: ComponentFixture<TbytComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbytComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
