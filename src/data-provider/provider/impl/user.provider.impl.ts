import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserProvider } from '../user.provider';
import { UserModel } from 'src/data-provider/models/user/User.entity';
import { UpdatetUserDto } from 'src/controller/dto/user/update-user.td';
import { UserDto } from 'src/controller/dto/user/user.dto';

@Injectable()
export class UserProvider implements IUserProvider {
    private readonly logger = new Logger(UserProvider.name);
    constructor(
        @InjectRepository(UserModel)
        private readonly usersRepository: Repository<UserModel>,
    ) { }

    async getUser(name: string): Promise<any> {
        try {
            const filter = {
                "user_name": name
            }
            return this.usersRepository.findOneBy(filter);
        } catch (e) {
            throw e
        }
    }
    async updateUser(name: string, updatetUser: UpdatetUserDto): Promise<any> {
        try {
            const filter = {
                "user_name": name
            }
            const userFound = await this.usersRepository.findOneBy(filter);
            this.logger.log(`user found ${JSON.stringify(userFound)}`)
            
            if (userFound) {
                const update = await this.usersRepository.update(filter, updatetUser);
                this.logger.log(`updateUser ${JSON.stringify(update)}`)
                return {message: "The operation was successfully completed."}
            }
            throw new NotFoundException(`Doesn´t find the user ${name}`)

        } catch (e) {
            throw e
        }
    }
    async createUser(userDto: UserDto): Promise<any> {
        try {
            this.logger.log(`createUser ${JSON.stringify(userDto)}`)
            const filter = {
                "user_name": userDto.user_name
            }
            const userFound = await this.usersRepository.findOneBy(filter);

            if(userFound){
                throw new InternalServerErrorException('That username already exists');
            }
            const { ...userDetail } = userDto
            const review = []
            const user = this.usersRepository.create({
                ...userDetail,
                review
            });
            const createUser = await this.usersRepository.save(user)
            this.logger.log(`created ${JSON.stringify(createUser)}`)
            return {message:"User created successfully" }
        } catch (e) {
            this.logger.error(e);
            if(e instanceof InternalServerErrorException){
                throw e
            }
            throw new InternalServerErrorException('Error creating user in database');
        }
    }

    async getUserReviews(userName: string): Promise<any> {
        try {
            this.logger.log(`get user:${userName}`)
            const movieFound = await this.usersRepository
                .createQueryBuilder('user')
                .select(['user.user_name', 'user.user_id', 'user.genre'])
                .where("user_name = :user_name", { user_name: userName })
                .leftJoinAndSelect("user.review", "review")
                .leftJoinAndSelect("review.movie", "movie")
                .getOne()
            this.logger.log(`user Found : ${JSON.stringify(movieFound)}`)
            return movieFound
        } catch (e) {
            this.logger.error(e)
            return e
        }
    }
}

