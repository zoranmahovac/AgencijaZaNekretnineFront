import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Agent} from '../interfaces/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private apiUrl = 'http://localhost:8080/agent/all';
  private apiUrlSave = 'http://localhost:8080/agent/save';
  private apiUrlDelete = 'http://localhost:8080/agent/delete/';


  constructor(private http:HttpClient) { }

  getAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.apiUrl);
  }

  saveAgent(agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(this.apiUrlSave, agent);
  }

  deleteAgent(id:number):Observable<void>{
    console.log(`${this.apiUrlDelete}${id}`);
    return this.http.post<void>(`${this.apiUrlDelete}${id}`,{});
  }

}
