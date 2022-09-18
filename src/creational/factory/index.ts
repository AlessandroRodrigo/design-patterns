import { ConcreteCreator } from './classes/concrete-creator';
import { Creator } from './classes/Creator';

function clientCode(creator: Creator) {
  console.log("Client: I'm not aware of the creator's class, but it still works.");
  console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator());
