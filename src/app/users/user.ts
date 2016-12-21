export class User{

    private _username: string;
    private _email: string;
    private _password: string;
    private _contactNumbers: string;

    constructor(parameters: {username: any, email: any, password: any,contactNumbers:any} ) {
        this._username = parameters.username;
        this._email = parameters.email;
        this._password = parameters.password;
        this._contactNumbers = parameters.contactNumbers;

    }

    get username() {
        return this._username;
    }
    get contactNumbers() {
        return this._contactNumbers;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }


}