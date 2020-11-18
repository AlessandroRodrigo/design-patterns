import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(private name: string, private price: number) {
    this.price = price;
    this.name = name;
  }

  getPrice(): number {
    return this.price;
  }
}
