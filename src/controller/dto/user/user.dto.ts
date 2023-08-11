import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsArray } from "class-validator";


export class UserDto {

      @IsOptional()
      @IsString()
      @ApiProperty({ description: "genre", type: String })
      genre: string;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "userName", type: String })
      userName: string;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "password", type: String })
      password: string;

      constructor(
            genre: string,
            userName: string,
            password: string
             ){
            this.genre = genre
            this.userName = userName
            this.password = password
      }
}