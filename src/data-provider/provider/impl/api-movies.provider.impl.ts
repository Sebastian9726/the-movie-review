import { Logger, Injectable } from '@nestjs/common';
import { IApiMoviesProvider } from '../api-movies';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class ApiMoviesProvider implements IApiMoviesProvider {
    private readonly logger = new Logger(ApiMoviesProvider.name);

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService
    ) { }


    async request(data: any): Promise<any> {
        const url = this.configService.get('PAYRROLLOANVIABILITYURL');
        const  dataResponse  = await firstValueFrom(
            this.httpService.get<any>(url+`${data}?language=en-US`).pipe(
                catchError((error: AxiosError) => {
                    this.logger.error(error.response.data);
                    throw 'An error happened with api movies TMDB!';
                }),
            ),
        );
        return dataResponse;
    }

}

