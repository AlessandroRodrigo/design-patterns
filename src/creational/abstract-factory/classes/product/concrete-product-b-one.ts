import { AbstractProductA } from '../../interfaces/product/abstract-product-a-protocol';
import { AbstractProductB } from '../../interfaces/product/abstract-product-b-protocol';

export class ConcreteProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return 'The result of the product B1.';
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}
