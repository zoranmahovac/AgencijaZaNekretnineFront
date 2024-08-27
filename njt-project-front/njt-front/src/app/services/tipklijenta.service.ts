import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipklijenta } from '../interfaces/tipklijenta';
import { Observable } from 'rxjs';
import { Statistikatipa } from '../interfaces/statistikatipa';

@Injectable({
  providedIn: 'root'
})
export class TipklijentaService {

  private getTipKlijentaUrl = "http://localhost:8080/tipklijenta/all";
  private deleteTipKlijentaUrl = "http://localhost:8080/tipklijenta/delete/";
  private addTipKlijentaUrl = "http://localhost:8080/tipklijenta/save";
  private getStatTipaUrl = "http://localhost:8080/statistikatipa/get/"

  constructor(private http: HttpClient) { }

  getTipKlijenta():Observable<Tipklijenta[]>{
    return this.http.get<Tipklijenta[]>(this.getTipKlijentaUrl);
  }
  deleteTipKlijenta(id:number):Observable<void>{
    return this.http.post<void>(`${this.deleteTipKlijentaUrl}${id}`,{});
  }
  addTipKlijenta(tip:Tipklijenta):Observable<void>{
    return this.http.post<void>(this.addTipKlijentaUrl,tip);
  }
  getStatistikaTipa(rburp:number,tip_kl:number):Observable<Statistikatipa[]>{
    console.log(`${this.getStatistikaTipa}${tip_kl}/${rburp}`);
    return this.http.get<Statistikatipa[]>(`${this.getStatTipaUrl}${tip_kl}/${rburp}`);
  }


}
