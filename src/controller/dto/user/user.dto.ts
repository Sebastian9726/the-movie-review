import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsArray } from "class-validator";


export class UserDto {

      @IsOptional()
      @IsString()
      @ApiProperty({ description: "genre", type: String })
      genre: string;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "user_name", type: String })
      user_name: string;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "password", type: String })
      password: string;

      constructor(
            genre: string,
            user_name: string,
            password: string
             ){
            this.genre = genre
            this.user_name = user_name
            this.password = password
      }
}