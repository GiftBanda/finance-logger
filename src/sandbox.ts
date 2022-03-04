// let character = 'mario';
// let age = 40;
// let isBlackBelt = false;

//won't work
//character = 1;
//age = 'twenty';
//isBlackBelt = 'true';

//will work
// character = 'luigi';
// age = 30;
// isBlackBelt = true;

//functions

//  const circ = (diameter: number)=> {
//     return diameter * Math.PI;
// }

// console.log(circ(2));

//check how long it takes to run a function
//console.time('circ');
//console.timeEnd('circ');



//Types basics 

//Objects and arrays

// let names = ['mario', 'luigi', 'yoshi'];
// names.push('toad');
// names.push(3);
// names[1] = 40;

// let numbers = [1, 2, 3];
// numbers.push(4);
// numbers.push('four');
// numbers[1] = 'two';

// let mixed = [1, 'two', true];
// mixed.push('four');
// mixed.push(false);
// mixed.push(20);
// mixed[1] = 6;

//objects

// let ninja = {
//     name: 'mario',
//     age: 40,
//     belt: 'black',
// };

//ninja.age = 45;
//ninja.skills = ['fighting', 'sneaking'];
// ninja.name = 'yoshi';
//ninja.age = '59';

// ninja = {
//     name: 'yoshi',
//     age: 59,
//     belt: 'green',
//    // skills: ['sneaking', 'fighting'],
// };

//explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;



//arrays

// let ninjas: string[] = [];

// ninjas.push('Gift', 'Esther', 'Mario');

//union types

// let mixed: (string | number | boolean)[] = [];
// mixed.push('luigi');
// mixed.push(40);
// mixed.push(true);

// console.log(mixed);

// let uid: string | number;
// uid = '1234';
// uid = 1234;

//objects

// let ninjaOne: object;

// ninjaOne = { name: 'mario', age: 40 };

// let ninjaTwo: { name: string; age: number; belt: string; };

// ninjaTwo = {
//     name: 'yoshi',
//     age: 59,
//     belt: 'green',
// };

// console.log(ninjaOne);

//dynamic type

// let age: any;

// age = 40;
// age = '40';
// age = true;
// age = {name: 'mario', age: 40};

// let mixed: any[] = [];
// mixed.push(40);
// mixed.push('40');
// mixed.push(true);
// mixed.push({name: 'mario', age: 40});

// let ninja: {name: any, age: any}
// ninja = {name: 'mario', age: 40};

// console.log('test')

//functions type

// let greet: Function;

// greet = () => {
//     console.log('hello');
// }

// console.log(greet());

// let add = (a: number, b: number, c?: number | string) => {
//     console.log(a + b);
//     console.log(c);
// }

// console.log(add(1, 2, 4));


//type alliases

// type stringOrNum = string | number;
// type objWithName = {name: string, uid: stringOrNum};

// const logDetails = (uid: stringOrNum) => {
//     console.log(uid);
// }

//function types
//example

// let greet: (a: string, b: string) => void;

// greet = (name: string, greeting: string) => {
//     console.log(`${greeting} ${name}`);
// }

// greet('mario', 'good morning');

//example 2

// let calc: (a:number, b: number, c: string) => number;

// calc = (num1: number, num2: number, action: string) => {
//     if (action === 'add') {
//         return num1 + num2;
//     }
//     return num1 - num2;
// }   //return num1 + num2;

// console.log(calc(6, 2, 'add'));

//example 3

// let logDetails: (obj: {name: string, age: number}) => void;

// type person = {name: string, age: number};

// logDetails = (user: person) => {
//     console.log(`${user.name} is ${user.age} years old`);
// }

// logDetails({
//     name: 'Gift',
//     age: 40
// })

//interface
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: 'mario',
//     age: 40,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log('I am going to buy', amount, 'of stuff')
//         return amount
//     }
// }

// const greetPerson = (person: IsPerson) => {
//     console.log('Hello', person.name)
// }

// greetPerson(me)
