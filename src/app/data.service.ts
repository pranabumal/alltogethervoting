import { Injectable } from '@angular/core';
import {Candidate} from "./candidates/candidate";

@Injectable()
export class DataService {

  candidates: Candidate[] = [];

  constructor() { }

  addCandicate(data){
    this.candidates.push(data);
  }

  getCandidates(){
    return this.candidates;
  }

}
