let sales=prompt("Enter the sales");

let commission = 0;

if(sales>0 & sales <=5000){

    commission=sales*0.02;
    console.log(`your commision is ${commission}`);

}else if(sales>5001 & sales <=10000){

    commission=sales*0.05;
    console.log(`your commision is ${commission}`);

}else if(sales>10001 & sales <=20000){

    commission=sales*0.07;
    console.log(`your commision is ${commission}`);

}else if(sales>20000){

    commission=sales*0.1;
    console.log(`your commision is ${commission}`);

}else{
    console.log("No comission");
}