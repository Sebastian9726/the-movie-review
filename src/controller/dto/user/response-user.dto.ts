import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsArray, IsOptional, IsUUID } from "class-validator";
import { UserModel } from 'src/data-provider/models/user/User.entity';
import { UserDto } from './user.dto';
import { IUser } from 'src/core/entity/user/user.entity';

export class ResponseUserDto extends UserDto {

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({ description: "name", type: String })
    user_id: string
    constructor(user: IUser) {
        super(
            user.genre,
            user.username,
            user.password     
            )
        this.user_id = user.user_id
    }
}