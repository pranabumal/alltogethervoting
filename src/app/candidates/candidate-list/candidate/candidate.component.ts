import {Component, OnInit, Input} from '@angular/core';
import {Candidate} from "../../candidate";

@Component({
  selector: 'candidate',
  templateUrl: 'candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  @Input() candidate: Candidate;

  constructor() { }

  ngOnInit() {
  }

}
