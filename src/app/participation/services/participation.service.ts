import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  private url = `http://localhost:8086/api/transaccionalData`;
  private urlAttendance = `http://localhost:8085/v1/attendance`;
  private urlActivities = `http://localhost:8083/ms-soa`;
  constructor(private HttpClient: HttpClient) { }

  findbyIdActivity(idActivity: any){
    return this.HttpClient.get<any>(this.url+"/Actividad/"+idActivity);
  }

  create(attendance: any){
    return this.HttpClient.post(this.urlAttendance, attendance)
  }

  listActivities(){
    return this.HttpClient.get(`${this.urlActivities}/listData/active`)
  }
  
}
