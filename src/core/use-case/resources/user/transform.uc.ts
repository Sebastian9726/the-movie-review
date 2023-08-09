import { Injectable } from '@nestjs/common';
import { IUser } from '../../../entity/user/user.entity';
import { UserDto } from 'src/controller/dto/user/user.dto';
import { UserModel } from 'src/data-provider/models/user/User.entity';
import { ResponseUserDto } from 'src/controller/dto/user/response-user.dto';


@Injectable()
export abstract class IUserTransformUcRe{

    abstract dtoToEntity(userDTO:UserDto): UserModel

    abstract modelToDto(userEntity: ResponseUserDto): ResponseUserDto

}