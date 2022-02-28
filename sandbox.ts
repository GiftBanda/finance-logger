let character = 'mario';
let age = 40;
let isBlackBelt = false;

//won't work
//character = 1;
//age = 'twenty';
//isBlackBelt = 'true';

//will work
character = 'luigi';
age = 30;
isBlackBelt = true;

//functions

 const circ = (diameter: number)=> {
    return diameter * Math.PI;
}

console.log(circ(2));

//check how long it takes to run a function
//console.time('circ');
//console.timeEnd('circ');