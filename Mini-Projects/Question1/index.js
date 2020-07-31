function addText(){
    var input = document.getElementById('inputTask').value;
    //console.log(input);
    var node=document.createElement("p");
    var textnode=document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById('addTask').appendChild(node);

    
    
    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener('click', function(e) {
        node.parentNode.removeChild(node);
    }, false);
    node.appendChild(removeTask);


// Store data

 window.localStorage.setItem('k1', input);    

// Get data
var data = window.localStorage.getItem('k1');

console.log(data)

// Remove data
//localStorage.removeItem('myDatakey');
    
    
}
