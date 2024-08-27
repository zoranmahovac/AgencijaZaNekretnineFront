import { Component, OnInit } from '@angular/core';
import { Klijent } from '../interfaces/klijent';
import { Ugovor } from '../interfaces/ugovor';
import { Tipklijenta } from '../interfaces/tipklijenta';
import { KlijentService } from '../services/klijent.service';
import { TipklijentaService } from '../services/tipklijenta.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-klijent-add',
  templateUrl: './klijent-add.component.html',
  styleUrl: './klijent-add.component.css'
})
export class KlijentAddComponent implements OnInit{
  klijent:Klijent = {
    "jmbgKlijenta": "",
    "imeKlijenta": "",
    "prezimeKlijenta": "",
    "tipKlijenta": {
        "sifraTipa": 0,
        "nazivTipa": ""
    },
    "ugovori": []
  }
  ugovor:Ugovor = {
    "brojUgovora": 0,
    "adresaNekretnine": "",
    "povrsinaNepokretnosti": 0,
    "sprat": 0,
    "datumZakljucenja": new Date('2024-09-11'),
    "cena": 0,
    "angazovanja":[],
  }

  ugovori:Ugovor[]= []
  tipoviKlijenata:Tipklijenta[] = [];

  constructor(private klijentiService:KlijentService,private tipKlService:TipklijentaService, private snackBar: MatSnackBar){
  }

  ngOnInit():void{
    this.tipKlService.getTipKlijenta().subscribe(data=>{
      this.tipoviKlijenata = data;
    })

  }

  saveKlijent(){
    console.log("Svi ugovori:",this.ugovori);
    this.klijent.ugovori = this.ugovori;
    console.log("Klijent:",this.klijent);
    this.klijentiService.dodajKlijenta(this.klijent).subscribe(data=>{console.log("Sacuvani klijent:",data);
    this.resetForm();
    alert("Klijent je uspešno dodat!");
    
    });
  }

  addUgovor(){
    console.log("Trenutno je dodat ugovor:",this.ugovor);
    this.ugovori.push(this.ugovor); // dodaje nakupljen ugovor u listu ugovora
    console.log("Ugovori:");
    console.log(this.ugovori.length);
    console.log("Klijent",this.klijent);
    const dodajJos = confirm("Želite li da dodate još ugovora?");

    if (dodajJos) {
      // Resetujte formu za ugovor
      this.ugovor = {
        "brojUgovora": 0,
        "adresaNekretnine": "",
        "povrsinaNepokretnosti": 0,
        "sprat": 0,
        "datumZakljucenja": new Date('2024-09-11'),
        "cena": 0,
        "angazovanja":[],
      }
    }
    

  }

  resetForm() {
    this.klijent = {
      "jmbgKlijenta": "",
      "imeKlijenta": "",
      "prezimeKlijenta": "",
      "tipKlijenta": {
          "sifraTipa": 0,
          "nazivTipa": ""
      },
      "ugovori": []
    };
    this.ugovori = [];
    this.ugovor = {
      "brojUgovora": 0,
      "adresaNekretnine": "",
      "povrsinaNepokretnosti": 0,
      "sprat": 0,
      "datumZakljucenja": new Date('2024-09-11'),
      "cena": 0,
      "angazovanja":[],
    };
  }




}
