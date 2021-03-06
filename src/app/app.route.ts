import {Routes,RouterModule} from '@angular/router';
import {CandidatesComponent} from "./candidates/candidates.component";
import {HomeComponent} from "./home/home.component";
import {VotingComponent} from "./votingRoom/voting.component";
import {UsersComponent} from "./users/users.component";

const MAIN_ROUT:Routes=[
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent},
    {path:'candidates',component:CandidatesComponent},
    {path:'voting',component:VotingComponent},
]
export const AppRoute= RouterModule.forRoot(MAIN_ROUT);