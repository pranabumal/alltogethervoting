import {Component, OnInit, EventEmitter, Output,Input} from '@angular/core';
import {Candidate} from "../candidate";
import {DataService} from "../../data.service";

@Component({
    selector: 'candidate-list',
    templateUrl: './candidate-list.component.html'
})
export class CandidateListComponent implements OnInit {

    candidates: Candidate[] = [];
    @Output() selectCandidateEvent = new EventEmitter<Candidate>();
    constructor(private dataService: DataService) {
        this.candidates = this.dataService.getCandidates();
    }

    ngOnInit() {

    }
    onSubmit(formValue){
        this.dataService.addCandicate(new Candidate(formValue));
    }

    onCandidateSelected(candidate: Candidate) {
        this.selectCandidateEvent.emit(candidate);
    }

}

/*export class GenericPerson<T, S>{

 private s: S;

 get(v: T):T {
 return v;
 }

 set(s: S):void {
 this.s = s;
 }


 }

 let first = new GenericPerson<String, Product>();
 let second = new GenericPerson<Product, String>();

 first.set('sd');
 second.set('sd');*/
