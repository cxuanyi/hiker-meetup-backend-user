import {IsNotEmpty, IsInt, IsDateString} from 'class-validator';

class AuthAuthenticateOneDto {
    @IsNotEmpty()
    _email: string;

    @IsNotEmpty()
    _password: string;
}

export { AuthAuthenticateOneDto };