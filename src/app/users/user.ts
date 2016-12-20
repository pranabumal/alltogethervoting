export class User{

    private _username: string;
    private _email: string;
    private _password: string;

    constructor(parameters: {username: any, email: any, password: any} ) {
        this._username = parameters.username;
        this._email = parameters.email;
        this._password = parameters.password;

    }

    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }


}