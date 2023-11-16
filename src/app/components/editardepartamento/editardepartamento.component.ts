import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/Departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-editardepartamento',
  templateUrl: './editardepartamento.component.html',
  styleUrls: ['./editardepartamento.component.css']
})
export class EditardepartamentoComponent implements OnInit{
  public depto!: Departamento;
  public id!: string;

  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidadRef!: ElementRef;

  constructor(private _serviceDeptos: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router: Router) {}

  editarDepartamento(): void{
    var nombre = this.cajaNombreRef.nativeElement.value;
    var localidad = this.cajaLocalidadRef.nativeElement.value;
    this.depto = new Departamento(parseInt(this.id), nombre, localidad);

    this._serviceDeptos.editarDepto(this.depto).subscribe(response =>{
      console.log(response);
      this._router.navigate(["/"]);
    })

  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.id = parametros["id"];

      this._serviceDeptos.getDeptoId(this.id).subscribe(response =>{
        this.depto = response;

        //this.cajaNombreRef.nativeElement = response.nombre;
        //this.cajaLocalidadRef.nativeElement  = response.localidad;
      })
    })
  }

}
