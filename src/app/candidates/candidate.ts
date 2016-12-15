export class Candidate{

    private _voteCount:string [] =[];
    private _win:boolean = false;
    private _name: string;
    private _age: number;
    private _phone: string;
    private _description: string;

    constructor(parameters: {name: any, age: any, phone: any, description: any} ) {
        this._name = parameters.name;
        this._age = parameters.age;
        this._phone = parameters.phone;
        this._description = parameters.description;

    }
    set win(value: boolean) {
        this._win = value;
    }
    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get phone() {
        return this._phone;
    }

    get description() {
        return this._description;
    }

    get voteCount(): string[] {
        return this._voteCount;
    }

    get win(): boolean {
        return this._win;
    }
}