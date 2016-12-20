import {Component, OnInit} from "@angular/core";
import {User} from "./user"
@Component({
    selector: 'users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit{
    selectedUser : User;
    constructor() { }

    ngOnInit() {

    }
}