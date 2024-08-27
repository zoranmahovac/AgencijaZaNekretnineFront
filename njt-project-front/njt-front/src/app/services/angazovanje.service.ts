import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Angazovanje } from '../interfaces/angazovanje';
import { Addangazovanje } from '../interfaces/addangazovanje';

@Injectable({
  providedIn: 'root'
})
export class AngazovanjeService {


  private createUrl = 'http://localhost:8080/angazovanje/create'
  private allUrl = 'http://localhost:8080/angazovanje/all'
  private deleteUrl = 'http://localhost:8080/angazovanje/delete'

  addAng: Addangazovanje = {"id":0,"provizija":0,"realizovano":false}
  
  constructor(private http:HttpClient) { }

  getAll():Observable<Angazovanje[]>{
    return this.http.get<Angazovanje[]>(this.allUrl,{})
  }

  obrisiAngazovanje(id:number):Observable<void>{
    console.log(`${this.deleteUrl}/${id}`);
    return this.http.post<void>(`${this.deleteUrl}/${id}`,{});
  }

  createAngazovanje(angazovanje:Angazovanje):Observable<void>{
    console.log(`${this.createUrl}/${angazovanje.menadzer.id}/${angazovanje.agent.redniBrojURegistruPosrednika}/${angazovanje.ugovor.brojUgovora}/${angazovanje.klijent.jmbgKlijenta}`);
    console.log(angazovanje);
    console.log({"id":angazovanje.rbAngazovanja,
      "provizija":angazovanje.provizija,
       "realizovano":angazovanje.realizovano
     });
     this.addAng.id=angazovanje.rbAngazovanja;
     this.addAng.provizija=angazovanje.provizija;
     this.addAng.realizovano=angazovanje.realizovano;
    return this.http.post<void>(`${this.createUrl}/${angazovanje.menadzer.id}/${angazovanje.agent.redniBrojURegistruPosrednika}/${angazovanje.ugovor.brojUgovora}/${angazovanje.klijent.jmbgKlijenta}`,
      this.addAng);
  }

}
