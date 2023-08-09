import { Injectable } from '@nestjs/common';
import { IUser } from 'src/core/entity/user/user.entity';
import { UserModel } from '../model/user/User.model';


@Injectable()
export abstract class IUserProvider {

    abstract updateUser(filter: any, data: any): Promise<any>;

    abstract createUser(user: UserModel): Promise<UserModel | null>;

    abstract getUser(username: string): Promise<any>;

}