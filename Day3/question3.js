console.log("Thanks for entering the marks");

let m=prompt("Enter your marks and see console to get the grade", 10);

//console.log(m);

let grade = grades(m);


function grades(m){
if(m>=90){
    return "A"; //console.log("A");
}
else if(m<90 && m>= 70){
    return "B";   // console.log("B");
} 
else if(m<70 && m>= 50){
    return "C"; //console.log("c");
} 
else if(m<50){
    return "D";  // console.log("D");
} 

}

console.log(`Marks are ${m} and grade is ${grade}`);