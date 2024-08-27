import { Component, OnInit } from '@angular/core';
import { Angazovanje } from '../interfaces/angazovanje';
import { Ugovor } from '../interfaces/ugovor';
import { KlijentComponent } from '../klijent/klijent.component';
import { Klijent } from '../interfaces/klijent';
import { Agent } from '../interfaces/agent';
import { KlijentService } from '../services/klijent.service';
import { AgentService } from '../services/agent.service';
import { AngazovanjeService } from '../services/angazovanje.service';


@Component({
  selector: 'app-angazovanje',
  templateUrl: './angazovanje.component.html',
  styleUrl: './angazovanje.component.css'
})
export class AngazovanjeComponent implements OnInit{


  angazovanja:Angazovanje[]=[];
  selektovaniKlijent:Klijent={
    "jmbgKlijenta": "",
    "imeKlijenta": "",
    "prezimeKlijenta": "",
    "tipKlijenta":{
       "sifraTipa": 0,
      "nazivTipa": ""
    },
    "ugovori":[],
  }
  ugovori:Ugovor[]=this.selektovaniKlijent.ugovori;
  klijenti:Klijent[]=[]
  agenti:Agent[]=[];
  angazovanje:Angazovanje =  {
    "rbAngazovanja": 1,
    "provizija": 2000,
    "realizovano": false,
    "agent": {
        "redniBrojURegistruPosrednika": 0,
        "imeAgenta": "",
        "prezimeAgenta": "",
        "adresaAgenta": "",
        "uspesnostRealizacije": 0,
        "brojDodeljenihKlijenata": 0,
    },
    "menadzer": {
        "id": 1,
        "imeMenadzera": "Pera",
        "prezimeMenadzera": "Perović",
        "korisnickoIme": "pera123",
        "lozinka": "pera123",
        "angazovanja":[]
    },
    "ugovor": {
        "brojUgovora": 0,
        "adresaNekretnine": "",
        "povrsinaNepokretnosti": 0,
        "sprat": 0,
        "datumZakljucenja": new Date("2024-11-01"),
        "cena":0,
        "angazovanja":[]
    },
    "klijent": {
        "jmbgKlijenta": "",
        "imeKlijenta": "",
        "prezimeKlijenta": "",
        "tipKlijenta":{
           "sifraTipa": 0,
          "nazivTipa": ""
        },
        "ugovori":[],
    }

}

constructor(private klijentService:KlijentService, private agentService:AgentService,private angazovanjeService:AngazovanjeService){
}

angazIndic=false;

ngOnInit():void{
  this.klijentService.getAllKlijenti().subscribe(data=>{
    this.klijenti = data;
  });
  this.agentService.getAgents().subscribe(data=>{
    this.agenti = data;
  });
  this.angazovanjeService.getAll().subscribe(data=>{this.angazovanja=data});
  
}

pogledajAngazovanja(){
  this.angazIndic = ! this.angazIndic;

}

obrisiAngazovanje(id:number){
  this.angazovanjeService.obrisiAngazovanje(id).subscribe(data=>{console.log("Uspesno brisanje!",data)});
  this.angazovanja = this.angazovanja.filter(angazovanje=>angazovanje.rbAngazovanja!=id);
}

sacuvajAngazovanje() {
  console.log("Angazovanje:",this.angazovanje);
  this.angazovanjeService.createAngazovanje(this.angazovanje).subscribe(data=>{console.log("Uspeh",data)});
  alert("Angazovanje je uspesno kreirano!");
  this.resetForm();
}



onKlijentChange(): void {
  console.log("Selektovan je klijent.");
  this.ugovori = this.angazovanje.klijent.ugovori;
  console.log("Ugovori:",this.ugovori);
  console.log("Klijent:",this.angazovanje.klijent);
}

resetForm(){
  this.angazovanje = {
    "rbAngazovanja": 1,
    "provizija": 2000,
    "realizovano": false,
    "agent": {
        "redniBrojURegistruPosrednika": 0,
        "imeAgenta": "",
        "prezimeAgenta": "",
        "adresaAgenta": "",
        "uspesnostRealizacije": 0,
        "brojDodeljenihKlijenata": 0,
    },
    "menadzer": {
        "id": 1,
        "imeMenadzera": "Pera",
        "prezimeMenadzera": "Perović",
        "korisnickoIme": "pera123",
        "lozinka": "pera123",
        "angazovanja":[]
    },
    "ugovor": {
        "brojUgovora": 0,
        "adresaNekretnine": "",
        "povrsinaNepokretnosti": 0,
        "sprat": 0,
        "datumZakljucenja": new Date("2024-11-01"),
        "cena":0,
        "angazovanja":[]
    },
    "klijent": {
        "jmbgKlijenta": "",
        "imeKlijenta": "",
        "prezimeKlijenta": "",
        "tipKlijenta":{
           "sifraTipa": 0,
          "nazivTipa": ""
        },
        "ugovori":[],
    }
  }
}

}
