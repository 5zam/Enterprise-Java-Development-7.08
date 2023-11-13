//Here my class 
export class Character {
  constructor(
    private _id: string,
    private _name: string,
    private _occupation: string,
    private _weapon: string,
    private _debt: boolean
  ) {}

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get occupation(): string {
    return this._occupation;
  }

  get weapon(): string {
    return this._weapon;
  }

  get debt(): boolean {
    return this._debt;
  }
}
