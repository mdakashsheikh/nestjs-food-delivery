import { ObjectType, Field } from "@nestjs/graphql";
import { User } from "../entities/user.entities";

@ObjectType()
export class ErrorTypes {
    @Field()
    message: string;

    @Field({ nullable: true })
    code?: string
}

@ObjectType()
export class RegisterResponse {
    @Field(() => User, { nullable: true })
    user?: User | any;

    @Field(() => ErrorTypes, { nullable: true })
    error?: ErrorTypes;
}

@ObjectType()
export class LoginResponse {
    @Field(() => User )
    user: User;

    @Field(() => ErrorTypes, { nullable: true })
    error?: ErrorTypes;
    
}