import { Controller, Request, Post, UseGuards, Get, Body, Res, Req } from '@nestjs/common';
import { CreateUserDto } from '../../dto/user/create-user.dto';
import { JwtAuthGuard } from '../../../controller/guards/jwt-auth.guard';
import { IUserService } from 'src/controller/service/user.service';
@Controller('users')
export class UserController {
  constructor(
    private userService: IUserService,
  ) { }

  @Post('login')
  async login(@Request() req) {
    return this.userService.login(req.user);
  }

  @Post('update')
  async update(@Request() req) {
    return this.userService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

   @Post('register')
  addUser(@Body() user) {
    console.log("entre al controlador")
    return this.userService.create(user)
  }


}