import { AbstractProductA } from './abstract-product-a-protocol';

export interface AbstractProductB {
  usefulFunctionB(): string;

  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}
