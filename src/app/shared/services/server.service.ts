import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Server } from '../models/server.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  baseUrl = environment.baseURl;

  constructor(private http: HttpClient) { }

  getAllServers(params?) :Observable<any>{
    return this.http.get(`${this.baseUrl}/servers`, {params: params});
  }
}
