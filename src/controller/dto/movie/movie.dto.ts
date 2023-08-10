import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsArray, IsDate } from "class-validator";


export class MovieDto {

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "tmdb_Id", type: Number })
      tmdb_Id: number

      @IsOptional()
      @IsString()
      @ApiProperty({ description: "title", type: String })
      title: string;

      @IsNotEmpty()
      @IsDate()
      @ApiProperty({ description: "release_date", type: Date })
      release_date: Date;

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "poster", type: String })
      poster: string;

      @IsString({each:true})
      @IsArray()
      @ApiProperty({ description: "review", type: [String] })
      review: string[];

      constructor(
            tmdb_Id:number,
            title: string,
            release_date: Date,
            poster: string,
            review: string[] 
             ){
            this.tmdb_Id = tmdb_Id
            this.title = title
            this.release_date = release_date
            this.poster = poster
            this.review = review
      }
}