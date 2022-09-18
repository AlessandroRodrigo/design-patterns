import { AdapteeProtocol } from "../interfaces/adaptee-protocol";
import { AdapterProtocol } from "../interfaces/adapter-protocol";
import { Adaptee } from "./adaptee";

export class Adapter implements AdapterProtocol {
  adaptee: AdapteeProtocol;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('')
    return `Adapter: (TRANSLATED) ${result}`;
  }

}