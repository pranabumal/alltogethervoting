import {Component, OnInit, Input} from '@angular/core';
import {Candidate} from "../../candidate";

@Component({
  selector: 'candidate',
  templateUrl: 'candidate.component.html',
})
export class CandidateComponent implements OnInit {

  @Input() candidate: Candidate;

  constructor() { }

  ngOnInit() {
  }

  getName()
  {
    return this.candidate.name;
  }


}
