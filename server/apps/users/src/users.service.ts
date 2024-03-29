import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { PrismaService } from '../../../prisma/PrismaService';
// import { Response } from 'express'

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtServcie: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  //register user service
  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    const user = {
      name,
      email,
      password
    };
    return user;
  }

  //Login Service
  async Login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = {
      email,
      password
    };

    return user;
  }

  //get all users service
  async getUsers() {
    return this.prisma.user.findMany({});
  }
}
