import { Controller, Post, Body, Get, Param, HttpException, HttpStatus, Delete,  Res } from "@nestjs/common";
import { Coffee, Flavour, Dietary, Size, Strength } from './coffee';
import { coffeedto } from "./coffee.dto";
import { coffeeservice } from './coffee.service'
import { coffeeentity } from "./coffee.entity";


@Controller('coffee')
export class coffeecontroller {

  constructor(private readonly coffeeService: coffeeservice) {}


  @Get('list')
  getAllProducts() {
    return this.coffeeService.findAll();

  }

  @Post('add')
  create(@Body() coffeedtos: coffeedto, @Res() res: Response) {
     this.coffeeService.addcoffee(coffeedtos);
     return "Coffee was created successfully";

  }


  
  @Delete(':id')
  remove(@Param('id') id: number) {
    this.coffeeService.delete(id);
    this.coffeeService.deletebyid(id);
    return "cat deleted";
  }
}