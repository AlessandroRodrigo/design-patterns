import { Adaptee } from "./classes/adaptee";
import { Adapter } from "./classes/adapter";
import { TargetProtocol } from "./interfaces/target-protocol";

function clientCode(target: TargetProtocol) {
  console.log(target.request());
}

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);