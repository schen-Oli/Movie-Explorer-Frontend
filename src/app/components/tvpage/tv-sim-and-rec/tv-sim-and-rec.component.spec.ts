import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSimAndRecComponent } from './tv-sim-and-rec.component';

describe('TvSimAndRecComponent', () => {
  let component: TvSimAndRecComponent;
  let fixture: ComponentFixture<TvSimAndRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSimAndRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSimAndRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
