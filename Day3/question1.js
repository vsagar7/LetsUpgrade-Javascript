
console.log("Hi Thanks for giving the Number");


let input=prompt("enter the number to test its even or odd");

let test = OddorEven(input);

function OddorEven(input){
    
if(input%2==0){
  return "even"; 
}else{
 return "odd";  
}

}

console.log(`The number entered is ${input} and Number is ${test}`);

