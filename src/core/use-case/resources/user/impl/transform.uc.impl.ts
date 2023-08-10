
import { Injectable } from '@nestjs/common';
import { IUserTransformUcRe } from '../transform.uc';
import { IUser } from 'src/core/entity/user/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from 'src/data-provider/models/user/User.entity';
import { ResponseUserDto } from 'src/controller/dto/user/response-user.dto';
import { UserDto } from 'src/controller/dto/user/user.dto';
import { ReviewModel } from 'src/data-provider/models/review/Review.entity';


@Injectable()
export class UserTransformUcRe implements IUserTransformUcRe {


    dtoToEntity(userDTO: IUser): UserModel {
        const user = {
            user_id: uuidv4(),
            name: userDTO.name,
            genre: userDTO.genre,
            username: userDTO.username,
            password: userDTO.password

        } satisfies IUser
        return user
    }

    modelToDto(userEntity: UserModel): any {
/*
        const { user_id, name, genre, username, password, review } = userEntity
        const REVIEW_MAP: string[] = review.map((review: ReviewModel): string => review.name)
        const USER = { user_id, name, genre, username, password, REVIEW_MAP } satisfies IUser
        return new ResponseUserDto(USER);
        */

    }
}

