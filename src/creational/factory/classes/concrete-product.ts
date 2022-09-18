import { Product } from '../interfaces/product-protocol';

export class ConcreteProduct implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}
