import { Injectable } from '@nestjs/common';
import { CreateUserDto } from "src/controller/dto/user/create-user.dto";

@Injectable()
export abstract class IUserService {

  abstract login( data:any): Promise<any>;// TIPAR DEL TIPO

  abstract validateUser(username: string, pass: string ): Promise<any>;

  abstract create(CreateUserDto: CreateUserDto): Promise<CreateUserDto>;

  abstract update(CreateUserDto: any): Promise<any>;

 }