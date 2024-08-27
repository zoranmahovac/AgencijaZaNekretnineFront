import { Angazovanje } from "./angazovanje";

export interface Ugovor {
    brojUgovora:number;
    adresaNekretnine:string;
    povrsinaNepokretnosti:number;
    sprat:number;
    datumZakljucenja:Date;
    cena:number;
    angazovanja:Angazovanje[];
}
