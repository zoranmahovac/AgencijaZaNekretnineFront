import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Klijent } from '../interfaces/klijent';
import { Ugovor } from '../interfaces/ugovor';

@Injectable({
  providedIn: 'root'
})
export class KlijentService {


  private apiUrl = 'http://localhost:8080/klijent/all';
  private klijentUgovoriUrl = 'http://localhost:8080/klijent/get/'
  private obrisiUgovorUrl = 'http://localhost:8080/klijent/delete/'
  private dodajUgovorUrl = 'http://localhost:8080/klijent'
  private dodajKlijentaUrl = 'http://localhost:8080/klijent/save'
  private obrisiKlijentaUrl = 'http://localhost:8080/klijent/delete/'
  private ugovoriUrl = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  getAllKlijenti():Observable<Klijent[]>{
    return this.http.get<Klijent[]>(this.apiUrl);
  }
  getKlijentByJMBG(jmbg:string):Observable<Klijent>{
    console.log(this.klijentUgovoriUrl+jmbg);
    return this.http.get<Klijent>(this.klijentUgovoriUrl+jmbg);
  }
  obrisiUgovor(jmbg:string,brojUgovora:number):Observable<void>{
    console.log(`${this.obrisiUgovorUrl}${jmbg}/${brojUgovora}`);
    return this.http.post<void>(`${this.obrisiUgovorUrl}${jmbg}/${brojUgovora}`,{});
  }

  obrisiKlijenta(jmbg:string):Observable<void>{
    return this.http.post<void>(`${this.obrisiKlijentaUrl}${jmbg}`,{});
  }

  dodajUgovor(jmbg:string,ugovor:Ugovor):Observable<void>{
    return this.http.post<void>(`${this.dodajUgovorUrl}/${jmbg}/ugovori`,ugovor);
  }

  dodajKlijenta(klijent:Klijent):Observable<Klijent>{
    return this.http.post<Klijent>(this.dodajKlijentaUrl,klijent);
  }

}
