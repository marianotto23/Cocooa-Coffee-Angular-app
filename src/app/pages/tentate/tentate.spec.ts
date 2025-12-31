import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tentate } from './tentate';

describe('Tentate', () => {
  let component: Tentate;
  let fixture: ComponentFixture<Tentate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tentate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tentate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
