import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SolarDetailComponent } from "./solar-detail/solar-detail.component";
import { SolaresComponent } from "./solares/solares.component";
import { SolarSearchComponent } from "./solar-search/solar-search.component";
import { MessageComponent } from "./message/message.component";

import { SolarService } from "./solar.service";
import { MessageService } from "./message.service";
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SolaresComponent,
    SolarDetailComponent,
    MessageComponent,
    SolarSearchComponent
  ],
  bootstrap: [AppComponent],
  providers: [SolarService, MessageService,  {provide:
    APP_BASE_HREF, useValue: '/solares'}]
})
export class AppModule {}
