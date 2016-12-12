import {Component, OnInit, Input} from '@angular/core';
import {Candidate} from "../candidate";

@Component({
    selector: 'candidate-details',
    templateUrl: './candidate-details.component.html',
    styles: []
})
export class CandidateDetailsComponent implements OnInit {

    @Input() currentCandidate:Candidate;

    constructor() { }

    ngOnInit() {
    }

}
