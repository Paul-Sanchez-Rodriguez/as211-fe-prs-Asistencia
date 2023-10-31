import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdolescentService {

  private url = `http://localhost:8082/api/teenData`;
  private urltutor = 'http://localhost:8084/api/funcionaryData';
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<any>(this.url+"/listData/active");
  }

  findAlltutor() {
    return this.http.get<any>(this.urltutor+"/listData/active");
  }

  findbyIdTutor(idTutor: any){
    return this.http.get<any>(this.url+"/listIdTutor/"+idTutor);
  }

  UpdateAdolescent(attorney: any, idAttoney: number){
    return this.http.put(`${this.url}/${idAttoney}`, attorney )
  }
}
