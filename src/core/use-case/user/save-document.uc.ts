import { Injectable } from '@nestjs/common';
import { LoginUserDto } from 'src/controller/dto/user/login-user.dto';
import { ResponseUserDto } from 'src/controller/dto/user/response-user.dto';
import { UpdatetUserDto } from 'src/controller/dto/user/update-user.td';
import { UserDto } from 'src/controller/dto/user/user.dto';


@Injectable()
export abstract class IUserUc{

    abstract updateUser(name: string, updatetUser: UpdatetUserDto): Promise<ResponseUserDto>;

    abstract createUser(user: UserDto): Promise<UserDto>;

    abstract getUser(name: string): Promise<ResponseUserDto>;

    abstract validate(loginUser:LoginUserDto): Promise<ResponseUserDto>;
}