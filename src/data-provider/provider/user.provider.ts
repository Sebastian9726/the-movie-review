import { Injectable } from '@nestjs/common';
import { IUser } from 'src/core/entity/user/user.entity';
import { UserModel } from '../models/user/User.entity';
import { UpdatetUserDto } from 'src/controller/dto/user/update-user.td';

@Injectable()
export abstract class IUserProvider {

    abstract updateUser(name: string, updatetUser: UpdatetUserDto): Promise<UserModel>;

    abstract createUser(user: IUser): Promise<UserModel | null>;

    abstract getUser(username: string): Promise<UserModel>;

}