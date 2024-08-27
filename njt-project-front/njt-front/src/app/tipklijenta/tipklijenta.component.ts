import { Component, OnInit, Type } from '@angular/core';
import { Tipklijenta } from '../interfaces/tipklijenta';
import { TipklijentaService } from '../services/tipklijenta.service';
import { Agent } from '../interfaces/agent'; 
import { AgentService } from '../services/agent.service';
import { Statistikatipa } from '../interfaces/statistikatipa';
@Component({
  selector: 'app-tipklijenta',
  templateUrl: './tipklijenta.component.html',
  styleUrl: './tipklijenta.component.css'
})
export class TipklijentaComponent implements OnInit{

    tipoviKlijenata: Tipklijenta[] = [];

    agentsStat:Agent[] = [];

    statistike: Statistikatipa[] = [];

    tipKlijentaAdd: Tipklijenta = {
      "sifraTipa":0,
      "nazivTipa":""
    }

    showForm:boolean = false; 
    
    viewStatIndicator:boolean = false;
    sifraStats: number = 0;
    rburpStat:number = 0;

    constructor(private tipKlijentaService:TipklijentaService, private agentService:AgentService){}

    ngOnInit():void{
      this.tipKlijentaService.getTipKlijenta().subscribe(data=>{
        console.log("U metodi ng on init tip klijenta ts.");
        this.tipoviKlijenata = data;
        console.log(this.tipoviKlijenata);
        console.log(this.tipoviKlijenata[0]);
      });

      this.agentService.getAgents().subscribe(data=>{
        this.agentsStat = data;
      })
    }

    deleteTipKlijenta(id:number):void{

      console.log("Brisanje tipa sa idjem:",id);
      console.log(id);
      this.tipKlijentaService.deleteTipKlijenta(id).subscribe(
        () => {
          this.tipoviKlijenata = this.tipoviKlijenata.filter(tip=>tip.sifraTipa!=id);
          alert("Tip klijenta je uspešno obrisan!");
        },
        error =>{
          console.error("Greska pri brisanju tipa klijenta",error);
          alert("Došlo je do greške prilikom brisanja tipa klijenta!");
        }
      )
    }

    addTipKlijenta(){

      if(this.tipKlijentaAdd.nazivTipa && this.tipKlijentaAdd.sifraTipa){
        this.tipKlijentaService.addTipKlijenta(this.tipKlijentaAdd).subscribe(
          response => {
            console.log('Tip klijenta je uspešno dodat', response);
            alert("Tip klinenta je uspešno dodat!");
            this.resetForm();
            this.showForm = false; //sakrivamo formu nakon sto se doda novi tip 
          },
          error => {
            console.error('Greška prilikom dodavanja tipa klijenta', error);
            alert("Došlo je do greške prilikom dodavanja tipa klijenta.");
          }
        )
        this.tipoviKlijenata.push(this.tipKlijentaAdd);
      }

    }

    viewStatistics(id:number){
      this.viewStatIndicator=!this.viewStatIndicator //radi ovo + vraca agenta
      this.sifraStats = id;
      console.log(id);
      console.log(this.viewStatIndicator);
    }

    private resetForm():void{
      this.tipKlijentaAdd = {
        "sifraTipa":0,
        "nazivTipa":"",
      }
    }

    toggleForm():void{
      this.showForm = !this.showForm;
    }

    setRuburp(id:number){
      this.rburpStat = id;
      console.log("Setovano za statistiku: RBURP:",id, " tip klijenta: ",this.sifraStats);
      this.tipKlijentaService.getStatistikaTipa(this.rburpStat,this.sifraStats).subscribe(response=>{
        this.statistike = response;
      })
    }


}
