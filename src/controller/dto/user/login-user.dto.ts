import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyObject, ValidateNested, IsNotEmpty, IsString, IsNumber, IsArray, IsOptional } from "class-validator";



export class LoginUserDto {
      
      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "name",type:String })
      name:string 

      @IsOptional()
      @IsString()
      @ApiProperty({ description: "password",type:String })
      password: string;
      
}