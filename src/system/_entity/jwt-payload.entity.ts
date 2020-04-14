
export class JwtPayload {
    public _user_id?: string;
    public _email?: string;

    public constructor(
        _user_id?: string,
        _email?: string,
    ) {
        this._user_id = _user_id;
        this._email = _email;
    }

    // Return a new object to contain values
    static CreateEmptyObject(): JwtPayload { return new JwtPayload(); }

    // R - For Reading
    static CreateReadOneObject(input: any): JwtPayload {
        let return_object = JwtPayload.CreateEmptyObject();

        return { ...return_object, ...input };
    }
}