import {Routes,RouterModule} from '@angular/router';
import {CandidatesComponent} from "./candidates/candidates.component";
import {HomeComponent} from "./home/home.component";

const MAIN_ROUT:Routes=[
    {path:'',component:HomeComponent},
    {path:'candidates',component:CandidatesComponent},
    // {path:'candidates-details',component:AppComponent},
]
export const AppRoute= RouterModule.forRoot(MAIN_ROUT);