import { Component, OnInit } from '@angular/core';
import { Klijent } from '../interfaces/klijent';
import { KlijentService } from '../services/klijent.service';
import { Ugovor } from '../interfaces/ugovor';

@Component({
  selector: 'app-klijent',
  templateUrl: './klijent.component.html',
  styleUrl: './klijent.component.css'
})
export class KlijentComponent implements OnInit{
  klijenti: Klijent[] = [];
  klijentUgovori:Klijent={
    "jmbgKlijenta": "",
    "imeKlijenta": "",
    "prezimeKlijenta": "",
    "tipKlijenta": {
        "sifraTipa": 0,
        "nazivTipa": ""
    },
    "ugovori": [],
  }
  klijentAdd:Klijent={
    "jmbgKlijenta": "",
    "imeKlijenta": "",
    "prezimeKlijenta": "",
    "tipKlijenta": {
        "sifraTipa": 0,
        "nazivTipa": ""
    },
    "ugovori": [],
  }


  selektovanKlijent:boolean=false;
  dodajUgovorIndicator:boolean=false;
  noviUgovor:Ugovor = {"brojUgovora":0,
                        "adresaNekretnine":"",
                        "povrsinaNepokretnosti":0.0,
                        "sprat":0,
                        "datumZakljucenja":new Date('2024-08-26'),
                        "cena":0.0,
                        "angazovanja":[]};
  jmbgUgovorAdd:string = "";

  constructor(private klijentiService:KlijentService){
  }

  ngOnInit():void{
    this.klijentiService.getAllKlijenti().subscribe(data=>{
      this.klijenti = data;
    })
  }

  getSpecificKlijent(jmbg:string){
    this.selectKlijent();
    console.log(jmbg);
    this.klijentiService.getKlijentByJMBG(jmbg).subscribe(data=>{
      this.klijentUgovori = data;
    });
    console.log(this.klijentUgovori);
    this.selektovanKlijent = false;
  }

  selectKlijent(){
    this.selektovanKlijent = !this.selektovanKlijent;
  }

  obrisiUgovor(jmbg:string,brUgovora:number){
    this.klijentiService.obrisiUgovor(jmbg,brUgovora).subscribe(data=>{
      //this.klijenti = this.klijenti.filter(klijent=>klijent.ugovori.!=id);
      this.klijenti = this.klijenti.map(klijent=>{
        if(klijent.jmbgKlijenta==jmbg){
          klijent.ugovori=klijent.ugovori.filter(ugovor=>ugovor.brojUgovora!==brUgovora);
          console.log("Refreshovani ugovori");
          this.getSpecificKlijent(jmbg);
        }
        return klijent;
      });
    })
  }

  otvoriFormuNoviUgovor(jmbg:string){
    this.dodajUgovorIndicator = !this.dodajUgovorIndicator;
    this.jmbgUgovorAdd = jmbg;
  }

  dodajUgovor(){
    //this.otvoriFormuNoviUgovor(jmbg);
    this.klijentiService.dodajUgovor(this.jmbgUgovorAdd,this.noviUgovor).subscribe(
      data=>{console.log("Novi ugovor uspesno dodat.",data);})
      this.getSpecificKlijent(this.jmbgUgovorAdd); // za tabelu za ugovore ‚1 klijenta
  }

  obrisiKlijenta(jmbg:string){
    this.klijentiService.obrisiKlijenta(jmbg).subscribe(data=>{console.log("Izbrisan klijent",data)});
    alert("Klijent i njegovi ugovori uspešno su izbrisani!");
    this.klijenti = this.klijenti.filter(klijent=>klijent.jmbgKlijenta!=jmbg);
  }

}







