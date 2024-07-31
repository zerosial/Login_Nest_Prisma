import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('error-auth')
  getErrorAuth(): any {
    const errorResponse = this.appService.getErrorAuth();
    throw new HttpException(
      {
        status: HttpStatus.UNAUTHORIZED,
        error: errorResponse,
      },
      HttpStatus.UNAUTHORIZED,
    );
  }

  @Get('hello/:name')
  getHelloName(@Param('name') name: string): string {
    return this.appService.getHelloName(name);
  }
}
