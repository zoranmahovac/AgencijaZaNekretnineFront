import { Component, OnInit} from '@angular/core';
import {AgentService} from '../services/agent.service';
import {Agent} from '../interfaces/agent';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.css'
})
export class AgentComponent implements OnInit{

  agents: Agent[] = [];

  constructor(private agentService: AgentService){}

  ngOnInit(): void {
    this.agentService.getAgents().subscribe(data=>{
      this.agents = data;
    });
  }

  deleteAgent(redniBroj:number):void {
    console.log(redniBroj);
    this.agentService.deleteAgent(redniBroj).subscribe(
      () => {
        this.agents = this.agents.filter(agent=>agent.redniBrojURegistruPosrednika!=redniBroj);
        alert("Agent je uspešno obrisan!");
      },
      error =>{
        console.error("Greska pri brisanju agenta",error);
        alert("Došlo je do greške prilikom brisanja agenta!");
      }
    )

    
  }

}
