import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PeticionesService {
    public url:string;

    constructor(private _http:HttpClient){
        this.url = "http://webservice.cergersoft.com/webservicezahiraoffice/";
    }

    getPrueba(){
        return 'hola mundo desde el servidor';
    }

    getEps(){
        return new Promise(resolve =>{
            this._http.get(this.url)
            .subscribe(data => {
                resolve(data)
            })
        })
    }

}