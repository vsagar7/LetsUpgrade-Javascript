let name=prompt("Enter your name","unknown");

document.write(`Hi ${name} !! Welcome to my site`)

const times=document.getElementById("time");

function clock(){
    let date = new Date();
let time=date.toLocaleTimeString();
times.innerText=time;
}

setInterval(() => {

    clock();
    
}, 1000);


const darks=document.getElementById("dark")//.classList.toggle("newClassName");

darks.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    
   
}
