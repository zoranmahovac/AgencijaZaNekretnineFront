import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgentComponent} from './agent/agent.component';
import { AgentAddComponent } from './agent-add/agent-add.component';
import { TipklijentaComponent } from './tipklijenta/tipklijenta.component';
import { KlijentComponent } from './klijent/klijent.component';
import { KlijentAddComponent } from './klijent-add/klijent-add.component';
import { AngazovanjeComponent } from './angazovanje/angazovanje.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:MenuComponent},
  {path:'agent',component:AgentComponent},
  {path:'add-agent',component:AgentAddComponent},
  {path:'tipklijenta',component:TipklijentaComponent},
  {path:'klijent',component:KlijentComponent},
  {path:'add-klijent',component:KlijentAddComponent},
  {path:'angazovanje',component:AngazovanjeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
