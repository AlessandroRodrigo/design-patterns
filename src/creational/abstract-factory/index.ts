import { ConcreteFactory1 } from './classes/factory/concrete-factory-one';
import { ConcreteFactory2 } from './classes/factory/concrete-factory-two';
import { AbstractFactory } from './interfaces/factory/abstract-factory-protocol';

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());
