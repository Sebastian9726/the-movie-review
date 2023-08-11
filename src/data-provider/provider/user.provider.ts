import { Injectable } from '@nestjs/common';
import { UserModel } from '../models/user/User.entity';
import { UpdatetUserDto } from 'src/controller/dto/user/update-user.td';
import { UserDto } from 'src/controller/dto/user/user.dto';

@Injectable()
export abstract class IUserProvider {

    abstract updateUser(useName: string, updatetUser: UpdatetUserDto): Promise<UserModel>;

    abstract createUser(user: UserDto): Promise<any>;

    abstract getUser(useName: string): Promise<UserModel>;

    abstract getUserReviews(useName: string): Promise<any>;

}