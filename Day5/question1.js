let num=prompt("Please enter how many times you want to give the numbers");
let arr=[];

for(let i=1;i<=num;i++)
{
    let n = prompt(`Enter the ${i} number`);

arr.push(n);

}
console.log(arr);

let arrodd= arr.filter(x=>x%2==1);

console.log(arrodd);

let arroddcubes=arrodd.map(x=>x*x*x);

console.log(arroddcubes);