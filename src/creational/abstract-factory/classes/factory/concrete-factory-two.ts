import { AbstractFactory } from '../../interfaces/factory/abstract-factory-protocol';
import { AbstractProductA } from '../../interfaces/product/abstract-product-a-protocol';
import { AbstractProductB } from '../../interfaces/product/abstract-product-b-protocol';
import { ConcreteProductA2 } from '../product/concrete-product-a-two';
import { ConcreteProductB2 } from '../product/concrete-product-b-two';

export class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
