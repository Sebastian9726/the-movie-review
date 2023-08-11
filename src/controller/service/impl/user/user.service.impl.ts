import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserService } from '../../user.service';
import { IUserUc } from '../../../../core/use-case/user/user.uc';
import { UserDto } from "src/controller/dto/user/user.dto";
import { LoginUserDto } from 'src/controller/dto/user/login-user.dto';
import { UpdatetUserDto } from 'src/controller/dto/user/update-user.td';
@Injectable()
export class UserService implements IUserService {


  constructor(
    public readonly _userUc: IUserUc,
    private jwtService: JwtService) { }

    
  async getReviews(username: string): Promise<any> {
    const GET_USER_REVIEWS = await this._userUc.getUserReviews(username)
    return GET_USER_REVIEWS
  }

  async getProfile(username: string): Promise<any> {
    const GET_USER = await this._userUc.getUser(username)
    return GET_USER
  }

    
  async create(CreateUserDto: UserDto): Promise<any> {

    const ADD_USER = await this._userUc.createUser(CreateUserDto)
    return {
      statusCode: HttpStatus.OK,
      timestamp: new Date().toISOString(),
      data: ADD_USER
    }
  }


  async update(name: string, updatetUser: UpdatetUserDto): Promise<any> {
    const USER_UPDATED = await this._userUc.updateUser(name,updatetUser)
    return USER_UPDATED
  }


  async login(loginUser:LoginUserDto) {
    const GET_USER = await this._userUc.validateUser(loginUser)
    const payload = { username: GET_USER.user_name, sub: GET_USER.user_id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}