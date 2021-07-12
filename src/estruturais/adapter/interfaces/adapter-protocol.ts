import { AdapteeProtocol } from "./adaptee-protocol";

export interface AdapterProtocol {
    adaptee: AdapteeProtocol;
    request(): string;
}