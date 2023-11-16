import { Component, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/Departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creardepartamento',
  templateUrl: './creardepartamento.component.html',
  styleUrls: ['./creardepartamento.component.css']
})
export class CreardepartamentoComponent {
  public depto!: Departamento;

  @ViewChild("cajaid") cajaIdRef!: ElementRef;
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidadRef!: ElementRef;

  constructor(private _serviceDeptos: ServiceDepartamentos,
    private _router: Router){}

  crearDepartamento(): void{
    var idDepartamento = parseInt(this.cajaIdRef.nativeElement.value);
    var nombre = this.cajaNombreRef.nativeElement.value;
    var localidad = this.cajaLocalidadRef.nativeElement.value;
    
    this.depto = new Departamento(idDepartamento, nombre, localidad);
    console.log(this.depto)
    this._serviceDeptos.crearDepto(this.depto).subscribe(response=> {
      console.log(response);
      this._router.navigate(["/"]);
    })
  }

}
