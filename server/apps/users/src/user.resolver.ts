import { BadRequestException } from "@nestjs/common";
import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { RegisterResponse } from "./types/user.types";
import { RegisterDto } from "./dto/user.dto";
import { User } from "./entities/user.entities";
// import { Response } from "express";



@Resolver('User')
// @UseFilters
export class UserResolver {
    constructor(
        private readonly userService: UsersService
    ) {}

    @Mutation(() => RegisterResponse)
    async register(
        @Args('registerInput') registerDto: RegisterDto,
    ) : Promise<RegisterResponse> {
        if(!registerDto.name || !registerDto.email || !registerDto.password) {
            throw new BadRequestException('Please fill the all fileds')
        }

        const user = await this.userService.register(registerDto)

        return { user }
    }

    @Query(() => [User])
    async getUsers() {
        return this.userService.getUsers();
    }
}