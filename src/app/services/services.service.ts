import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ServiceInterface } from './serviceInterface';

@Injectable()
export class ServicesService {
  private _url : string = "/assets/userTable.json";
  constructor(private httpClient: HttpClient) { }
  
    getjson(): Observable<ServiceInterface[]>{
        return this.httpClient.get<ServiceInterface[]>(this._url);
    }
}
