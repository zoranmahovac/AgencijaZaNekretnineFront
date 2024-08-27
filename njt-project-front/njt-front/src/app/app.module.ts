import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule, withFetch} from '@angular/common/http';
import { AgentComponent } from './agent/agent.component';
import { AgentAddComponent } from './agent-add/agent-add.component';

import {FormsModule} from '@angular/forms';
import { KlijentComponent } from './klijent/klijent.component';
import { TipklijentaComponent } from './tipklijenta/tipklijenta.component';
import { KlijentAddComponent } from './klijent-add/klijent-add.component';
import { AngazovanjeComponent } from './angazovanje/angazovanje.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    AgentAddComponent,
    KlijentComponent,
    TipklijentaComponent,
    KlijentAddComponent,
    AngazovanjeComponent,
    MenuComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
