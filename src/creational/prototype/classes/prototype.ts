import { ComponentWithBackReference } from './component-with-back-reference';

export class Prototype {
  public primitive: unknown;
  public component: object = {};
  public circularReference: ComponentWithBackReference = new ComponentWithBackReference(this);

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}
