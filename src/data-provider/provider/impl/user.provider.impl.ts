import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserProvider } from '../user.provider';
import { UserModel } from 'src/data-provider/models/user/User.entity';
import { IUser } from 'src/core/entity/user/user.entity';
import { UpdatetUserDto } from 'src/controller/dto/user/update-user.td';


@Injectable()
export class UserProvider implements IUserProvider {

    constructor(
        @InjectRepository(UserModel)
        private usersRepository: Repository<UserModel>,
    ) { }

    async getUser(name: string): Promise<any> {
        try {
            const filter = {
                "name": name
            }
            return this.usersRepository.findOneBy(filter);
        } catch (e) {
            throw e
        }
    }
    async updateUser(name: string, updatetUser: UpdatetUserDto): Promise<any> {
        try {
            const filter = {
                "name": name
            }
             const update = await this.usersRepository.update(filter, updatetUser);
             return this.usersRepository.findOneBy(filter);

        } catch (e) {
            return e
        }
    }
    async createUser(user: IUser): Promise<UserModel | null> {
        try {
        return this.usersRepository.save(user);
        } catch (e) {
            return e
        }
    }
}

