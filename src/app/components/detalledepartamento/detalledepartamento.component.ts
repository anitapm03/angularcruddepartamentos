import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/Departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalledepartamento',
  templateUrl: './detalledepartamento.component.html',
  styleUrls: ['./detalledepartamento.component.css']
})
export class DetalledepartamentoComponent implements OnInit{
  public depto!: Departamento;
  public id!: string;

  constructor(private _serviceDeptos: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.id = parametros["id"];

      this._serviceDeptos.getDeptoId(this.id).subscribe(response =>{
        this.depto = response;
      })
    })
    
  }
}
