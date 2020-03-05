import { createParamDecorator } from "@nestjs/common";
import { User } from "../_entity/user.entity";

const GetUser= createParamDecorator((data, req) : User=>{
    return req.user;
});

export {GetUser};