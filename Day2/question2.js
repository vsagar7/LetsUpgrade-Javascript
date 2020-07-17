var s1 = "Hey lets upgrade java script";
var o1 = s1.search("java");
console.log(o1);  // Gives the postion of j if java keyword is found

var s2 = "Hello world!";
var o2 = s2.slice(0, 5);
console.log(o2); // gives first 5 characters

var s3 = "Hello world, welcome to the Java script world.";
var o3 = s3.includes("world");
console.log(o3);  // Returns true if the search key is in the string

var s4 = "Sai ";
var s5 = "sagar!";
var o4 = s4.concat(s5);
console.log(o4); //add two strings


var s5= "Visit America!";
var o5 = s5.replace("America", "India");
console.log(o5); // First world will be replaced with second word

var s6 = "Hello world!";
var o6 = s6.substring(1, 4);
console.log(o6); // Gives part of the string

var str = "       whats uppppp        ";
alert(str.trim());  //Remove spaces.