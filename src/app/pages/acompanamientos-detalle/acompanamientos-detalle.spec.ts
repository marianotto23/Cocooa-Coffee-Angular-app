import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanamientosDetalle } from './acompanamientos-detalle';

describe('AcompanamientosDetalle', () => {
  let component: AcompanamientosDetalle;
  let fixture: ComponentFixture<AcompanamientosDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompanamientosDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompanamientosDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
