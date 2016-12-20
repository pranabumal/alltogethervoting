import {Component, OnInit, Input} from '@angular/core';
import {User} from "../user";

@Component({
    selector: 'user-details',
    templateUrl: 'user-details.component.html',
    styles: []
})
export class UserDetailsComponent implements OnInit {

    @Input() currentUser:User;

    constructor() { }

    ngOnInit() {
    }

}
