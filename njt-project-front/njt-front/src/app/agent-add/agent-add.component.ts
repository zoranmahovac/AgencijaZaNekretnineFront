import { Component } from '@angular/core';
import {Agent} from '../interfaces/agent';
import {AgentService} from '../services/agent.service'

@Component({
  selector: 'app-agent-add',
  templateUrl: './agent-add.component.html',
  styleUrl: './agent-add.component.css'
})
export class AgentAddComponent {
  agent: Agent = {
    redniBrojURegistruPosrednika: 0,
    imeAgenta: '',
    prezimeAgenta: '',
    adresaAgenta: '',
    uspesnostRealizacije: 0,
    brojDodeljenihKlijenata: 0
  };

  constructor(private agentService: AgentService) {}

  onSubmit(): void {
    console.log("Agent to add:",this.agent);
    if(this.isValidAgent(this.agent)){
    this.agentService.saveAgent(this.agent).subscribe(
      response => {
        console.log('Agent je uspešno dodat', response);
        alert("Agent je uspešno dodat!");
        this.resetForm();
      },
      error => {
        console.error('Greška prilikom dodavanja agenta', error);
        alert("Došlo je do greške prilikom dodavanja agenta!");
      }
    );
  }else{
    alert("Neispravan unos! Podaci koje ste uneli nisu validni. Molimo proverite sve podatke.");
  }
}
private isValidAgent(agent:Agent):boolean{
  const nameRegex = /^[A-Za-zčćžšđČĆŽŠĐ\s]+$/;
  
  return(
    agent.redniBrojURegistruPosrednika>0 &&
    agent.imeAgenta.trim()!=='' &&
    agent.prezimeAgenta.trim()!=='' &&
    agent.adresaAgenta.trim()!=='' &&
    agent.uspesnostRealizacije>=0 &&
    agent.brojDodeljenihKlijenata>=0 &&
    nameRegex.test(agent.imeAgenta.trim()) &&
    nameRegex.test(agent.prezimeAgenta.trim())
  )
}
private resetForm(): void {
  this.agent = {
    redniBrojURegistruPosrednika: 0,
    imeAgenta: '',
    prezimeAgenta: '',
    adresaAgenta: '',
    uspesnostRealizacije: 0,
    brojDodeljenihKlijenata: 0
  };
}

}