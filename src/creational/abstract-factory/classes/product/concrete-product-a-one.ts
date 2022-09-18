import { AbstractProductA } from '../../interfaces/product/abstract-product-a-protocol';

export class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return 'The result of the product A1.';
  }
}
