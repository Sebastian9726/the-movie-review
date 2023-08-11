import { Injectable, Logger } from "@nestjs/common";
import { IUserUc } from "../user.uc";
import { IUserProvider } from "../../../../data-provider/provider/user.provider";
import { UserDto } from "src/controller/dto/user/user.dto";
import { LoginUserDto } from "src/controller/dto/user/login-user.dto";
import { UpdatetUserDto } from "src/controller/dto/user/update-user.td";
import { UserModel } from "src/data-provider/models/user/User.entity";
import { IReviewUc } from "../../review/review.uc";
import { ReviewUc } from "../../review/impl/review.uc.impl";


@Injectable()
export class UserUc implements IUserUc {
  private readonly logger = new Logger(ReviewUc.name);
  constructor(
    private readonly _userProvider: IUserProvider,
    private readonly _reviewUc: IReviewUc
    //private readonly _userTransformUcRe: IUserTransformUcRe
  ) { }

  async getUserReviews(name: string): Promise<any> {
    this.logger.log("getUserReviews start")
    const USER_REVIEW = await this._reviewUc.getUserReviews(name)
    this.logger.log(`user updated: ${JSON.stringify(USER_REVIEW)} `)
    return USER_REVIEW
  }
  async updateUser(name: string, updatetUser: UpdatetUserDto): Promise<any> {
    this.logger.log("updateUser start")
    const USER_UPDATED = await this._userProvider.updateUser(
      name,
      updatetUser
    )
    this.logger.log(`user updated: ${JSON.stringify(USER_UPDATED)} `)
    return USER_UPDATED
  }
  async getUser(username: string): Promise<any> {
    this.logger.log("getUser start")
    const USER_FOUNDED = await this._userProvider.getUser(
      username
    )
    this.logger.log(`user found:${JSON.stringify(USER_FOUNDED)} `)
    return USER_FOUNDED
  }

  async validateUser(loginUser: LoginUserDto): Promise<UserModel> {
    const USER_FOUNDED = await this._userProvider.getUser(
      loginUser.name
    )
    if (USER_FOUNDED) {
      if (USER_FOUNDED.password == loginUser.password) {
        return USER_FOUNDED
      }
      throw "Invalid password"
    }
    throw "User don´t found"

  }

  async createUser(
    user: UserDto
  ): Promise<any> {
   
    const USER_CREATED = await this._userProvider.createUser(
      user
    )
    return USER_CREATED

  }
}
