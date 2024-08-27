import { Angazovanje } from "./angazovanje";

export interface Menadzer {
    id:number;
    imeMenadzera:string;
    prezimeMenadzera:string;
    korisnickoIme:string;
    lozinka:String;
    angazovanja:Angazovanje[];
}
