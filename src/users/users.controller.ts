import { Controller, Get, Put, Body, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserInput } from './dto/update-user.input';
import { ChangePasswordInput } from './dto/change-password.input';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from './dto/response-user-dto';

@Controller('users')
export class UserController {
  constructor(private usersService: UsersService) {}

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  @ApiTags('USER API')
  async getProfile(@Req() req): Promise<UserResponseDto> {
    return this.usersService.getProfile(req.user);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Put('update')
  @ApiTags('USER API')
  async updateUser(@Req() req, @Body() newUserData: UpdateUserInput) {
    return this.usersService.updateUser(req.user.id, newUserData);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Put('change-password')
  @ApiTags('USER API')
  async changePassword(
    @Req() req,
    @Body() changePasswordData: ChangePasswordInput,
  ) {
    return this.usersService.changePassword(
      req.user.id,
      req.user.password,
      changePasswordData,
    );
  }
}
