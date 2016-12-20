import { Injectable } from '@angular/core';
import {Candidate} from "./candidates/candidate";
import {User} from "./users/user";

@Injectable()
export class DataService {

  candidates: Candidate[] = [];
  users: User[] = [];

  constructor() { }

  addCandicate(data){
    this.candidates.push(data);
  }

  getCandidates(){
    return this.candidates;
  }
  addUser(data){
    this.users.push(data);
  }

  getUsers(){
    return this.users;
  }

}
