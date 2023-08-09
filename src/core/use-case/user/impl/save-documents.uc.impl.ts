import { Injectable } from "@nestjs/common";
import { IUserUc } from "../save-document.uc";
import { IUserProvider } from "../../../../data-provider/provider/user.provider";
import { IUser } from "src/core/entity/user/user.entity";
import { CreateUserDto } from "src/controller/dto/user/create-user.dto";
import { UserModel } from "src/data-provider/model/user/User.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserUc implements IUserUc {
 
  constructor(
    private readonly _userProvider: IUserProvider,

    
  ) {
    
  }
  updateUser(filter: any, data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getUser(username: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async createUser(
    user: IUser
  ): Promise<any> {
   const USER_MODEL =  CreateUserDto.dtoToEntity(user)
    const USER_CREATED = await this._userProvider.createUser(USER_MODEL)
    return UserModel.entityToDto(USER_CREATED) 

  }
}
