import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsArray } from "class-validator";


export class ReviewDto {

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "review_id", type: Number })
      review_id: number

      @IsOptional()
      @IsString()
      @ApiProperty({ description: "name", type: String })
      name: string;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "comment", type: String })
      comment: string;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "movie", type: String })
      movie: string;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "rating", type: Number })
      rating: number;

      @IsString({each:true})
      @IsArray()
      @ApiProperty({ description: "genre_ids", type: [String] })
      genre_ids: string[];

      constructor(
            review_id:number,
            name: string,
            comment: string,
            movie: string,
            rating: number,
            genre_ids: string[] 
             ){
            this.review_id = review_id
            this.name = name
            this.comment = comment
            this.movie = movie
            this.rating = rating
            this.genre_ids = genre_ids

      }
}