import { Injectable } from '@nestjs/common';
import { IUser } from '../../../core/entity/user/user.entity';


@Injectable()
export abstract class IUserUc{

    abstract updateUser(filter: any, data: any): Promise<any>;

    abstract createUser(user: IUser): Promise<any>;

    abstract getUser(username: string): Promise<any>;
}