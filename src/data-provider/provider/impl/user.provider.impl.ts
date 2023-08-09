import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IUserProvider } from '../user.provider';
import { UserModel } from '../../model/user/User.model';



@Injectable()
export class UserProvider implements IUserProvider {

    constructor(
        @InjectRepository(UserModel)
        private usersRepository: Repository<UserModel>,
        

    ) { }

    async getUser(username: string): Promise<any> {
        try {
            const filter = {
                "name": username
            }
            return this.usersRepository.findOneBy(filter);
        } catch (e) {
            return e
        }
    }
    async updateUser(filter: any, data: any): Promise<any> {
        try {
             await this.usersRepository.update(filter, data);
             return this.usersRepository.findOne(filter);

        } catch (e) {
            return e
        }
    }
    async createUser(user: UserModel): Promise<UserModel | null> {
        try {
        return this.usersRepository.save(user);
        } catch (e) {
            return e
        }
    }
}

