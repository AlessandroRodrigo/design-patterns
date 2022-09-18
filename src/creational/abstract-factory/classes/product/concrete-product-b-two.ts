import { AbstractProductA } from '../../interfaces/product/abstract-product-a-protocol';
import { AbstractProductB } from '../../interfaces/product/abstract-product-b-protocol';

export class ConcreteProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return 'The result of the product B2.';
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}
