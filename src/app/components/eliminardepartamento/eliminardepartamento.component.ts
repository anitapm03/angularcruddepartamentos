import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';
@Component({
  selector: 'app-eliminardepartamento',
  templateUrl: './eliminardepartamento.component.html',
  styleUrls: ['./eliminardepartamento.component.css']
})
export class EliminardepartamentoComponent implements OnInit{
  public id!: string;
  constructor(private _serviceDeptos: ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router: Router){}

  ngOnInit(): void {

    this._activeRoute.params.subscribe((parametros: Params) => {
      this.id = parametros["id"];

      var respuesta = confirm("¿Seguro que desea borrar el depto: " + this.id + "?");
         
      if(respuesta){
        this._serviceDeptos.eliminarDepto(this.id).subscribe(response =>{
          console.log(response);
          this._router.navigate(["/"]);
        })
      }else {
        alert("Acción cancelada");
        this._router.navigate(["/"]);
      }
        
    })
    
  }

}
