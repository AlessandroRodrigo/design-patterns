import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Bean, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeBeverage(): this {
    const rice = new Rice('Arroz', 5);
    const bean = new Bean('Feijão', 30);
    const meat = new Meat('Carne', 10);
    this._meal.add(rice, bean, meat);
    return this;
  }

  makeDessert(): this {
    const beverage = new Beverage('Bebida', 5);
    this._meal.add(beverage);
    return this;
  }

  makeMeal(): this {
    const dessert = new Dessert('Sobremesa', 5);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
}
