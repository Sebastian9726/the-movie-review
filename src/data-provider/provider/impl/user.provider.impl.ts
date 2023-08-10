import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserProvider } from '../user.provider';
import { UserModel } from 'src/data-provider/models/user/User.entity';
import { UpdatetUserDto } from 'src/controller/dto/user/update-user.td';
import { UserDto } from 'src/controller/dto/user/user.dto';
import { v4 as uuidv4 } from 'uuid';
import { ReviewModel } from 'src/data-provider/models/review/Review.entity';

@Injectable()
export class UserProvider implements IUserProvider {
    private readonly logger = new Logger(UserProvider.name);
    constructor(
        @InjectRepository(UserModel)
        private usersRepository: Repository<UserModel>,
        @InjectRepository(ReviewModel)
        private reviewsRepository: Repository<ReviewModel>,
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
    async createUser(userDto: UserDto): Promise<UserModel | null> {
        try {

            const { ...userDetail } = userDto
            const review = []
            const user = this.usersRepository.create({
                ...userDetail,
                review
            });
            const createUser = await this.usersRepository.save(user)
            this.logger.log("created",createUser)
            return createUser
        } catch (e) {

            this.logger.error(e);
            return e
        }
    }
}

