import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminardepartamentoComponent } from './eliminardepartamento.component';

describe('EliminardepartamentoComponent', () => {
  let component: EliminardepartamentoComponent;
  let fixture: ComponentFixture<EliminardepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminardepartamentoComponent]
    });
    fixture = TestBed.createComponent(EliminardepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
