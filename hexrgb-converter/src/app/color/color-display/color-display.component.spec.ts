import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDisplayComponent } from './color-display.component';

describe('ColorDisplayComponent', () => {
  let component: ColorDisplayComponent;
  let fixture: ComponentFixture<ColorDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
