import { AbstractProductA } from '../product/abstract-product-a-protocol';
import { AbstractProductB } from '../product/abstract-product-b-protocol';

export interface AbstractFactory {
  createProductA(): AbstractProductA;

  createProductB(): AbstractProductB;
}
