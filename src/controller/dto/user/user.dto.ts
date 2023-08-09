import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from "class-validator";
import { IUser } from 'src/core/entity/user/user.entity';
import { UserModel } from 'src/data-provider/models/user/User.entity';

export class UserDto {

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

      constructor(name: string, genre: string,  username: string,password: string ){
            this.name = name
            this.genre = genre
            this.username = username
            this.password = password
      }
}