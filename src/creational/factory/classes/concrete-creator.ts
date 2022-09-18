import { Product } from '../interfaces/product-protocol';
import { ConcreteProduct } from './concrete-product';
import { Creator } from './Creator';

export class ConcreteCreator extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct();
  }
}
