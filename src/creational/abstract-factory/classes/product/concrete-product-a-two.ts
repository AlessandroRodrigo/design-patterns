import { AbstractProductA } from '../interfaces/abstract-product-a-protocol';

export class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return 'The result of the product A2.';
  }
}
