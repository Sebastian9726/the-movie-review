import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class UpdatetUserDto {
      
      @IsOptional()
      @IsString()
      @ApiProperty({ description: "genre",type:String })
      genre: string;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "password",type:String })
      password: string;
}