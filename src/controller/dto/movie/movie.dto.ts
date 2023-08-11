import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsArray, IsDate } from "class-validator";


export class MovieDto {

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "tmdb_Id", type: Number })
      tmdb_id: number

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

      @IsNotEmpty()
      @IsString()
      @ApiProperty({ description: "overview", type: String })
      overview: string;

      @IsString({each:true})
      @IsArray()
      @ApiProperty({ description: "review", type: [String] })
      review: string[];

      constructor(
            tmdb_id:number,
            title: string,
            release_date: Date,
            poster: string,
            overview:string,
            review: string[] 
             ){
            this.tmdb_id = tmdb_id
            this.title = title
            this.release_date = release_date
            this.poster = poster
            this.overview = overview
            this.review = review
      }
}