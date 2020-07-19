let a = 10;
let b = 20;

console.log(`First number is ${a}`);
console.log(`First number is ${b}`);


let sum = addition(a,b);
console.log(`Sum of two numbers is ${sum}`);

let sub = subtraction(a,b);
console.log(`subtraction of two numbers is ${sub}`);

let mul = multiplication(a,b);
console.log(`Multiplication of two numbers is ${mul}`);

let div = division(a,b);
console.log(`Division of two numbers is ${div}`);

let sqr = squareroot(a,b);
console.log(`Square root of first  number is ${sqr}`);

function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

function squareroot(a){
    return Math.sqrt(a);
}