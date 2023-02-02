import { NovaTranferenciaComponent } from './nova_transfenrencia/nova_transfenrencia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    NovaTranferenciaComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
