import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyects } from '../model/proyects';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
 URL = environment.URL + 'proyecto/';
 
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Proyects[]>{
    return this.httpClient.get<Proyects[]>(this.URL+ 'lista');
  }

  public detail(id:number):Observable<Proyects>{
    return this.httpClient.get<Proyects>(this.URL + `detail/${id}`);
  }

  public save(proyecto : Proyects):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyecto);
  }

  public update(id: number, proyecto:Proyects): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyecto);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
