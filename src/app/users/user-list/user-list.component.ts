import {Component, OnInit, EventEmitter, Output,Input} from '@angular/core';
import {User} from "../user";
import {DataService} from "../../data.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
@Component({
    selector: 'user-list',
    templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {

    users: User[] = [];
    userForm;
    @Output() selectUserEvent = new EventEmitter<User>();
    constructor(private dataService: DataService) {
        this.users = this.dataService.getUsers();
    }


    onSubmit(userForm){
        console.log(userForm);
        this.dataService.addUser(new User(userForm));
    }

    onUserSelected(user: User) {
        this.selectUserEvent.emit(user);
    }
    ngOnInit() {
        this.userForm = new FormGroup({
            'username': new FormControl('', [Validators.required]),
            'email': new FormControl('', [Validators.required, this.validateEmail]),
        });

        this.userForm.addControl('password', new FormControl('', [Validators.required]));
        this.userForm.addControl('confirmPassword', new FormControl('', [Validators.required, this.passwordMatch.bind(this)]));
    }

    validateEmail(c:FormControl) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(c.value)) {
            return {email: 'Invalid Email'};
        }

        return null;
    }

    passwordMatch(c) {
        if (this.userForm.get('password').value != c.value) {
            return {passwordMismatch: true}
        }

        return null;
    }



}

