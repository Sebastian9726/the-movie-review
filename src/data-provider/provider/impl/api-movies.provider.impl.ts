import { Logger, Injectable } from '@nestjs/common';
import { IApiMoviesProvider } from '../api-movies';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError, AxiosHeaders } from 'axios';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class ApiMoviesProvider implements IApiMoviesProvider {
    private readonly logger = new Logger(ApiMoviesProvider.name);

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService
    ) { }


    async request(idMovie: number): Promise<any> {
        const TOKEN_TMDB = this.configService.get('TOKEN_TMDB');
        const URL = this.configService.get('URL_TMDB_MOVIE');
        const config = {
            headers:{
                "Authorization": `Bearer ${TOKEN_TMDB}`,
                "accept": 'application/json'
            }

        }
        const  dataResponse  = await firstValueFrom(
            this.httpService.get(URL+`${idMovie}?language=en-US`,config).pipe(
                catchError((error: AxiosError) => {
                    this.logger.error(error.response.data);
                    throw 'An error happened with api movies TMDB:'+ JSON.stringify(error.response.data)
                }),
            ),
        );
        return dataResponse.data;
    }

}

