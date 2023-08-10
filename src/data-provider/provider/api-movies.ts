import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IApiMoviesProvider {

    abstract request(data): Promise<any>;

}