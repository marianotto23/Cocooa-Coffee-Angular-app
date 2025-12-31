import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeDetalle } from './cafe-detalle';

describe('CafeDetalle', () => {
  let component: CafeDetalle;
  let fixture: ComponentFixture<CafeDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
