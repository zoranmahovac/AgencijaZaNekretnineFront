import { Tipklijenta } from "./tipklijenta";
import { Ugovor } from "./ugovor";

export interface Klijent {

    jmbgKlijenta:string;
    imeKlijenta:string;
    prezimeKlijenta:string;
    tipKlijenta:Tipklijenta;
    ugovori:Ugovor[];
}
