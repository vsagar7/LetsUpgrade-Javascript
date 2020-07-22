

// setTimeout(()=>{

//    document.bgColor='blue';
//     document.bgColor='black';

// },5000)



var i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["black", "blue", "brown", "green","yellow"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 5000);