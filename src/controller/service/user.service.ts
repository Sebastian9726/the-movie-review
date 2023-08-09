import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user/user.dto';
import { LoginUserDto } from '../dto/user/login-user.dto';
import { UpdatetUserDto } from '../dto/user/update-user.td';

@Injectable()
export abstract class IUserService {

  abstract create(CreateUser: UserDto): Promise<any>;

  abstract login( loginUser:LoginUserDto): Promise<any>;// TIPAR DEL TIPO

  abstract getProfile(username: string): Promise<any>;

  abstract update(name: string,UpdatetUser: UpdatetUserDto): Promise<any>;

 }