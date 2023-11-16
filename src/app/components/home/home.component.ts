import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/Departamento';
import { ServiceDepartamentos } from 'src/app/services/service.departamentos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public departamentos!: Array<Departamento>;
  
  constructor(private _serviceDeptos: ServiceDepartamentos){}

  ngOnInit(): void {
    this._serviceDeptos.getDeptos().subscribe(response =>{
      this.departamentos = response;
    })
  }

}
