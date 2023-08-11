import { Controller, Request, Post, UseGuards, Get, Body, Res, Req, Param, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../../../controller/guards/jwt-auth.guard';
import { IUserService } from 'src/controller/service/user.service';
import { UserDto } from 'src/controller/dto/user/user.dto';
import { LoginUserDto } from 'src/controller/dto/user/login-user.dto';
import { ApiHeader } from '@nestjs/swagger';
import { UpdatetUserDto } from 'src/controller/dto/user/update-user.td';
@Controller('users')
export class UserController {
  constructor(
    private userService: IUserService,
  ) { }

  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token otorgado por el login',
    required: true,
  })
  @UseGuards(JwtAuthGuard)
  @Get(':userName/reviews')
  getReviews(
    @Request() req,
    @Param('userName') userName: string,
    
    ) {
    return this.userService.getReviews(userName);
  }


  @Post('register')
  addUser(
    @Body() user: UserDto) {
    return this.userService.create(user)
  }

  @Post('login')
  async login(
    @Body() loginUser: LoginUserDto
  ) {
    return this.userService.login(loginUser);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token otorgado por el login',
    required: true,
  })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(
    @Request() req) {
    return this.userService.getProfile(req.user);
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token otorgado por el login',
    required: true,
  })
  @UseGuards(JwtAuthGuard)
  @Post('update')
  async update(
    @Request() req,
    @Body() user: UpdatetUserDto
    ) {
    return this.userService.update(req.user,user);
  }


}