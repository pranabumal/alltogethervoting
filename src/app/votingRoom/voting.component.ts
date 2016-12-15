import {Component, Input} from '@angular/core';
import {Candidate} from "../candidates/candidate";
import {DataService} from "../data.service";
@Component({
  selector: 'app-vote',
  templateUrl: 'voting.component.html',
  styleUrls: ['voting.component.css']
})
export class VotingComponent {
  voteState = {
    minVote: 0,
    maxVote: 0,
  };

  candidates: Candidate[] = [];

  constructor(private dataService: DataService) {
    this.candidates = this.dataService.getCandidates();
  }


  onSelect(candidate: Candidate): void {

    let allCount = [];
    candidate.voteCount.push('vote');

    for (let i=0;i<this.candidates.length;i++) {
      allCount.push(this.candidates[i].voteCount.length);
    }
    this.voteState.minVote = Math.min(...allCount);
    this.voteState.maxVote = Math.max(...allCount);

    for (let i=0;i<this.candidates.length;i++) {

      if(this.candidates[i].voteCount.length == this.voteState.minVote){
        this.candidates[i].win=false;
      }
      if(this.candidates[i].voteCount.length == this.voteState.maxVote){
        this.candidates[i].win=true;
      }
      if(this.candidates[i].voteCount.length < this.voteState.maxVote && this.candidates[i].voteCount.length >this.voteState.minVote){
        this.candidates[i].win=null;
      }


    }
  }
}
