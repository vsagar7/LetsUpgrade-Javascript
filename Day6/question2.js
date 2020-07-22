let num=prompt("Enter a number for multiplication");

const list = document.querySelector('#list');
console.log(list);

// fruits.forEach(fruit=>{
//     // list.innerText += `<li>${fruit}</li>`;
//     list.innerHTML += `<li>${fruit}</li>`;
// })

let x="x";
for(let i=1;i<=10;i++){

    document.write(`${num} ${x} ${i} = `);
    document.write(num*i);
    document.write("<br />");
}
