
import { Ugovor } from "./ugovor";
import { Klijent } from "./klijent";
import { Menadzer } from "./menadzer";
import { Agent } from "./agent";

export interface Angazovanje {
    rbAngazovanja:number;
    provizija:number;
    realizovano:boolean;
    agent:Agent;
    menadzer:Menadzer;
    ugovor:Ugovor;
    klijent:Klijent;
}
