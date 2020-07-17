

console.log ("Using Ternanry")

console.log("Thanks for entering the marks");

let m=prompt("Enter your marks and see console to get the grade", 10);

console.log(m);
let grade;

m>90?grade="A":(m>70 && m<=90)?grade="B":(m>50 && m<=70)?grade="C":grade="D";

console.log(`Marks are ${m} and grade is ${grade}`);

// switch(m){
//     case m>90:
//         console.log(`Marks are ${m} and grade is A`);
//         break;
//     case m<=90:
//             console.log(`Marks are ${m} and grade is D`);
//             break;
//     default:
//         console.log("Invalid");
// }


