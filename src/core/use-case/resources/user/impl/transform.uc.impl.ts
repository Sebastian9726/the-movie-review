
import { Injectable } from '@nestjs/common';
import { IUserTransformUcRe } from '../transform.uc';
import { IUser } from 'src/core/entity/user/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { UserModel } from 'src/data-provider/models/user/User.entity';
import { ResponseUserDto } from 'src/controller/dto/user/response-user.dto';


@Injectable()
export class UserTransformUcRe implements IUserTransformUcRe {


    dtoToEntity(userDTO: IUser): UserModel {
        const user = {    
            user_id:uuidv4(),
            name: userDTO.name,
            genre: userDTO.genre,
            username: userDTO.username,
            password:userDTO.password
          } satisfies IUser
        return user
    }

    modelToDto(userEntity: UserModel): ResponseUserDto {
        return new ResponseUserDto(userEntity);
        
    }  
}

