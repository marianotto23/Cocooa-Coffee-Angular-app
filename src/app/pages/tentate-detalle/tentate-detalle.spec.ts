import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentateDetalle } from './tentate-detalle';

describe('TentateDetalle', () => {
  let component: TentateDetalle;
  let fixture: ComponentFixture<TentateDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TentateDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TentateDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
