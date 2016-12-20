import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CandidatesComponent} from "./candidates/candidates.component";
import {CandidateListComponent} from "./candidates/candidate-list/candidate-list.component";
import {CandidateDetailsComponent} from "./candidates/candidate-details/candidate-details.component";
import {CandidateComponent} from "./candidates/candidate-list/candidate/candidate.component";
import {AppRoute} from "./app.route";
import {HomeComponent} from "./home/home.component";
import {DataService} from "./data.service";
import {VotingComponent} from "./votingRoom/voting.component";
import {UserComponent} from "./users/user-list/user/user.component";
import {UserDetailsComponent} from "./users/user-details/user-details.component";
import {UsersComponent} from "./users/users.component";
import {UserListComponent} from "./users/user-list/user-list.component";
import {ErrorBlockComponent} from "./error-block/error-block.component";

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateListComponent,
    CandidateDetailsComponent,
    CandidateComponent,
    UsersComponent,
    UserListComponent,
    UserDetailsComponent,
    UserComponent,
    VotingComponent,
    ErrorBlockComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoute
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
