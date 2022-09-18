import { MyDatabaseFunction } from '../db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Alessandro', age: 20 });
myDatabaseClassic.add({ name: 'Gustavo', age: 19 });
myDatabaseClassic.add({ name: 'Vitor', age: 24 });
myDatabaseClassic.show();

export { myDatabaseClassic };
