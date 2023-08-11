import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsArray, IsNumber, Min, Max } from "class-validator";


export class ReviewDto {

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "userName", type: String })
      userName: string;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "comment", type: String })
      comment: string;

      @IsNotEmpty()
      @IsNumber()
      @ApiProperty({ description: "tmdbId", type: Number })
      tmdbId: number;

      @IsNotEmpty()
      @Min(1, { message: 'The min value is 1' }) // Definir valor mínimo
      @Max(10, { message: 'The max value is 10' }) // Definir valor máximo
      @IsNumber()
      @ApiProperty({ description: "rating", type: Number })
      rating: number;

      constructor(
            comment: string,
            movie: number,
            rating: number,
            userName: string 
             ){
            this.comment = comment
            this.tmdbId = movie
            this.rating = rating
            this.userName = userName

      }
}