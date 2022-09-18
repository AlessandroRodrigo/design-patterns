// import { Bean, Meat, Rice } from './classes/meals';
// import { MealBox } from './classes/meal-box';
//
// const rice = new Rice('Arroz', 5);
// const bean = new Bean('Feijão', 30);
// const meat = new Meat('Carne', 10);
// const mealBox = new MealBox();
//
// mealBox.add(rice, bean, meat);
// console.log(mealBox);
// console.log(mealBox.getPrice());

import { MainDishBuilder } from './classes/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage().makeDessert();
console.log(mainDishBuilder.getMeal());
