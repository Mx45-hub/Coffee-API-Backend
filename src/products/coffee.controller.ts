import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { Coffee, Flavour, Dietary, Size, Strength } from './coffee';
import { coffeedto } from "./coffee.dto";


@Controller('products')
export class ProductsController {

  coffeeList: Coffee[] = [];

  constructor() {
    // Initialize coffeeList in the constructor
    this.coffeeList = [];
  }
  @Get('list')
  getAllProducts(): any[] {
    const coffeeList: Coffee[] = [
      new Coffee(1, "Espresso", Size.SHORT, Flavour.Vanilla, Dietary.Regular, Strength.Strong),
      new Coffee(2, "Cappuccino", Size.TALL, Flavour.Caramel, Dietary.Decaf, Strength.Mild),
      new Coffee(3, "Mocha", Size.GRANDE, Flavour.Chocolate, Dietary.SugarFree, Strength.Strong),
      new Coffee(4, "Latte", Size.VENTI, Flavour.Hazelnut, Dietary.Regular, Strength.Mild),
      new Coffee(5, "Americano", Size.TALL, Flavour.Peppermint, Dietary.DairyFree, Strength.ExtraShot),
    ];

    // mapping the enums names 
    const mappedCoffeeList = coffeeList.map((coffee) => ({
      ...coffee,
      size: Size[coffee.size],
      flavour: Flavour[coffee.flavour],
      dietary: Dietary[coffee.dietary],
      strength: Strength[coffee.strength],
    }));

    return mappedCoffeeList;
  }


  @Post()
  createProduct(@Body() coffeedto: coffeedto): Coffee {
    // Create a new Coffee instance from the DTO

    const newCoffee = new Coffee(
      coffeedto.id,
      coffeedto.name,
      coffeedto.size,
      coffeedto.flavour,
      coffeedto.dietary,
      coffeedto.strength
    );
  
    // Add the new coffee to the list
    this.coffeeList.push(newCoffee);
  
    // Return the newly created coffee
    return newCoffee;
  }
}