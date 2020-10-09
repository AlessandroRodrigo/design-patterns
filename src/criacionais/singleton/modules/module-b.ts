import { MyDatabaseFunction } from '../db/my-database-function';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module-a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'José', age: 20 });
myDatabaseClassic.add({ name: 'Lucas', age: 19 });
myDatabaseClassic.add({ name: 'Jaquelline', age: 21 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
