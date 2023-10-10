import { Controller, Get, Header, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('index') // Define a new route for /index
  @Render('index')
  @Header('Content-Type', 'text/html') 
  index() {

    let name : string =  this.appService.getHello();
    return { message: name};
  }
}
