import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acompanamientos } from './acompanamientos';

describe('Acompanamientos', () => {
  let component: Acompanamientos;
  let fixture: ComponentFixture<Acompanamientos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acompanamientos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acompanamientos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
