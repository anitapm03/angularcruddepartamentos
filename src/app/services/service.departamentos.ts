import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Departamento } from '../models/Departamento';

@Injectable()
export class ServiceDepartamentos {

    constructor(private _http: HttpClient){}

    getDeptos(): Observable<any>{

        var request = "api/departamentos";
        var url = environment.urlDeptos + request;

        return this._http.get(url);
    }

    getDeptoId( id:string ): Observable<any>{

        var request = "api/departamentos/" + id;
        var url = environment.urlDeptos + request;

        return this._http.get(url);
    }

    crearDepto(depto:Departamento): Observable<any>{

        //debemos convertir el objeto a json
        var json = JSON.stringify(depto);
        //debemos indicar el formato
        var header = new HttpHeaders().set("content-type", "application/json");

        var request = "api/departamentos";
        var url = environment.urlDeptos + request;

        return this._http.post(url, json, {headers: header});

    }

    editarDepto(depto:Departamento): Observable<any>{
        var json = JSON.stringify(depto);
        var header = new HttpHeaders().set("content-type", "application/json");

        var request = "api/departamentos";
        var url = environment.urlDeptos + request;

        return this._http.put(url, json, {headers: header});
    }

    eliminarDepto( id:string ): Observable<any>{
        var request = "api/departamentos/" + id;
        var url = environment.urlDeptos + request;

        return this._http.delete(url);
    }

}