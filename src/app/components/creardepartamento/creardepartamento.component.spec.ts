import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardepartamentoComponent } from './creardepartamento.component';

describe('CreardepartamentoComponent', () => {
  let component: CreardepartamentoComponent;
  let fixture: ComponentFixture<CreardepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreardepartamentoComponent]
    });
    fixture = TestBed.createComponent(CreardepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
