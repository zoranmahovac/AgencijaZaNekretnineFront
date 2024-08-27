import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
//import { KlijentListComponent } from './klijent-list/klijent-list.component'; // Dodaj svoju komponentu ovde

@NgModule({
  declarations: [
    AppComponent,
    //KlijentListComponent // Dodaj svoju komponentu ovde
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
