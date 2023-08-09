import { Injectable } from "@nestjs/common";
import { IUserUc } from "../save-document.uc";
import { IUserProvider } from "../../../../data-provider/provider/user.provider";
import { IUser } from "src/core/entity/user/user.entity";
import { UserDto } from "src/controller/dto/user/user.dto";
import { IUserTransformUcRe } from "../../resources/user/transform.uc";
import { ResponseUserDto } from "src/controller/dto/user/response-user.dto";
import { LoginUserDto } from "src/controller/dto/user/login-user.dto";
import { UpdatetUserDto } from "src/controller/dto/user/update-user.td";


@Injectable()
export class UserUc implements IUserUc {

  constructor(
    private readonly _userProvider: IUserProvider,
    private readonly _userTransformUcRe: IUserTransformUcRe
  ) { }
  async updateUser(name: string, updatetUser: UpdatetUserDto): Promise<any> {
    const USER_FOUNDED = await this._userProvider.updateUser(
      name,
      updatetUser
    )
    return this._userTransformUcRe.modelToDto(USER_FOUNDED)
  }
  async getUser(username: string): Promise<ResponseUserDto> {
    const USER_FOUNDED = await this._userProvider.getUser(
      username
    )
    return this._userTransformUcRe.modelToDto(USER_FOUNDED)


  }

  async validate(loginUser: LoginUserDto): Promise<ResponseUserDto> {
    const USER_FOUNDED = await this._userProvider.getUser(
      loginUser.name
    )
    if (USER_FOUNDED) {
      if (USER_FOUNDED.password == loginUser.password) {
        return this._userTransformUcRe.modelToDto(USER_FOUNDED)
      }
      throw "Invalid password"
    }
    throw "User don´t found"

  }

  async createUser(
    user: UserDto
  ): Promise<UserDto> {
    this._userTransformUcRe.dtoToEntity(user)
    const USER_CREATED = await this._userProvider.createUser(
      this._userTransformUcRe.dtoToEntity(user)
    )
    return this._userTransformUcRe.modelToDto(USER_CREATED)

  }
}
