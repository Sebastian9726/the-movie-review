import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsArray, IsOptional } from "class-validator";
import { IUser } from 'src/core/entity/user/user.entity';
import { UserModel } from 'src/data-provider/model/user/User.model';

export class CreateUserDto {

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "name", type: String })
      name: string

      @IsOptional()
      @IsString()
      @ApiProperty({ description: "genre", type: String })
      genre: string;


      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "user", type: String })
      username: string;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "password", type: String })
      password: string;

      constructor(user:IUser){
            this.name = user.name
            this.genre = user.genre
            this.username = user.username
            this.password = user.password
      }

      static dtoToEntity(userDTO: CreateUserDto): UserModel {
            return new UserModel(userDTO);
      }

}