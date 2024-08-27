import { Agent } from "./agent";
import { Statistikaid } from "./statistikaid";
import { Tipklijenta } from "./tipklijenta";

export interface Statistikatipa {
    id:Statistikaid;
    tipKlijenta:Tipklijenta;
    agent:Agent;
    brojDodeljenihKLijenataTipa:number;
}
