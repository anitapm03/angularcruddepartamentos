import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalledepartamentoComponent } from './detalledepartamento.component';

describe('DetalledepartamentoComponent', () => {
  let component: DetalledepartamentoComponent;
  let fixture: ComponentFixture<DetalledepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalledepartamentoComponent]
    });
    fixture = TestBed.createComponent(DetalledepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
