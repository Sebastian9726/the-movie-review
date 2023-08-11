import { Injectable } from '@nestjs/common';
import { LoginUserDto } from 'src/controller/dto/user/login-user.dto';
import { UpdatetUserDto } from 'src/controller/dto/user/update-user.td';
import { UserDto } from 'src/controller/dto/user/user.dto';
import { UserModel } from 'src/data-provider/models/user/User.entity';


@Injectable()
export abstract class IUserUc{

    abstract updateUser(name: string, updatetUser: UpdatetUserDto): Promise<any>;

    abstract createUser(user: UserDto): Promise<UserDto>;

    abstract getUser(name: string): Promise<any>;

    abstract getUserReviews(name: string): Promise<any>; 

    abstract validateUser(loginUser:LoginUserDto): Promise<UserModel>;
}