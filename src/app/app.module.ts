import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CandidatesComponent} from "./candidates/candidates.component";
import {CandidateListComponent} from "./candidates/candidate-list/candidate-list.component";
import {CandidateDetailsComponent} from "./candidates/candidate-details/candidate-details.component";
import {CandidateComponent} from "./candidates/candidate-list/candidate/candidate.component";
import {AppRoute} from "./app.route";
import {HomeComponent} from "./home/home.component";
import {DataService} from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateListComponent,
    CandidateDetailsComponent,
    CandidateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoute
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
