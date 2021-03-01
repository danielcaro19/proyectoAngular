import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SolarDetailComponent } from "./solar-detail/solar-detail.component";
import { SolaresComponent } from "./solares/solares.component";
import { SolarSearchComponent } from "./solar-search/solar-search.component";
import { MessageComponent } from "./message/message.component";
import { Grafico01Component } from "./grafico01/grafico01.component";

import { SolarService } from "./solar.service";
import { MessageService } from "./message.service";
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  declarations: [
    AppComponent,
    SolaresComponent,
    SolarDetailComponent,
    MessageComponent,
    SolarSearchComponent,
    Grafico01Component
  ],
  bootstrap: [AppComponent],
  providers: [SolarService, MessageService,  {provide:
    APP_BASE_HREF, useValue: '/solares'}]
})
export class AppModule {}
