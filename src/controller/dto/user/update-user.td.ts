import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyObject, ValidateNested, IsNotEmpty, IsString, IsNumber, IsArray, IsOptional } from "class-validator";

export class UpdatetUserDto {
      
      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "username",type:String })
      username:string 

      @IsOptional()
      @IsString()
      @ApiProperty({ description: "genre",type:String })
      genre: string;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "password",type:String })
      password: string;
}