export class Auth {
    public _user_id?: string;
    public _email?: string;
    public _password?: string;

    public constructor(
        _user_id?: string,
        _email?: string,
        _password?: string
    ) {
        this._email = _email;
        this._password = _password;
    }

    // Return a new object to contain values
    static CreateEmptyObject(): Auth { return new Auth(); }

    // R - For Reading
    static CreateReadOneObject(input: any): Auth {
        let return_object = Auth.CreateEmptyObject();

        return { ...return_object, ...input };
    }
}