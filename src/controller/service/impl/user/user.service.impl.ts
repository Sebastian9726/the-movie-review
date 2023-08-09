import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserService } from '../../user.service';
import { IUserUc } from '../../../../core/use-case/user/save-document.uc';
import { CreateUserDto } from "src/controller/dto/user/create-user.dto";



@Injectable()
export class UserService implements IUserService {


  constructor(
    public readonly _userUc: IUserUc,
    private jwtService: JwtService) { }

    
  async create(CreateUserDto: CreateUserDto): Promise<CreateUserDto> {
    const ADD_USER = await this._userUc.createUser(CreateUserDto)
    return ADD_USER
  }


  async update(CreateUserDto: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async validateUser(username: string, pass: string): Promise<any> {

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(CreateUserDto, ) {
    const ADD_USER = await this._userUc.createUser(CreateUserDto)
    return{
        statusCode: HttpStatus.OK,
        timestamp: new Date().toISOString(),
        data: ADD_USER
      }
  }

}