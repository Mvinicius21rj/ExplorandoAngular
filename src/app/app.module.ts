import { HttpClientModule } from '@angular/common/http';
import { NovaTranferenciaComponent } from './nova_transfenrencia/nova_transfenrencia.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localePt, 'pt');



@NgModule({
  declarations: [
    AppComponent,
    NovaTranferenciaComponent,

    ExtratoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
