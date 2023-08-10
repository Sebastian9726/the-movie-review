import { Injectable } from '@nestjs/common';
import { IUser } from 'src/core/entity/user/user.entity';
import { UserModel } from '../models/user/User.entity';
import { UpdatetUserDto } from 'src/controller/dto/user/update-user.td';
import { UserDto } from 'src/controller/dto/user/user.dto';

@Injectable()
export abstract class IUserProvider {

    abstract updateUser(name: string, updatetUser: UpdatetUserDto): Promise<UserModel>;

    abstract createUser(user: UserDto): Promise<UserModel | null>;

    abstract getUser(username: string): Promise<UserModel>;

}