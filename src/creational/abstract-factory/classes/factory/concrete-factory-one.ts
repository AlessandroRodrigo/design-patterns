import { AbstractFactory } from '../../interfaces/factory/abstract-factory-protocol';
import { AbstractProductA } from '../../interfaces/product/abstract-product-a-protocol';
import { AbstractProductB } from '../../interfaces/product/abstract-product-b-protocol';
import { ConcreteProductA1 } from '../product/concrete-product-a-one';
import { ConcreteProductB1 } from '../product/concrete-product-b-one';

export class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
