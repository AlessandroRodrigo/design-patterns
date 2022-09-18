import { TargetProtocol } from "../interfaces/target-protocol";

export class Target implements TargetProtocol {
  public request(): string {
    return 'Target: The default target\'s behavior.';
  }
}