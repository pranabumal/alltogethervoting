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

        this.selectedCandidate = new Candidate(1,'Pranab sarker',26,1675550197,'He is Good');

    }
}