import {Component, OnInit} from "@angular/core";
import {Candidate} from "./candidate"
@Component({
    selector: 'candidates',
    templateUrl: './candidates.component.html'
})
export class CandidatesComponent implements OnInit{
    selectedCandidate : Candidate;
    constructor() { }

    ngOnInit() {

    }
}