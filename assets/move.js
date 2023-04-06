let inp = document.getElementById('inp');
let addBtn = document.getElementById('btn-add');
let list = document.getElementById('list');
let todo = [];

function additems(){
    if ((inp.value != '') && (!todo.includes(`${inp.value}`))) {
        todo.push(inp.value);
    }

    let data = '';
    for(let item of todo){
        list.style =
        data += `<li class="list-group-item"> ${item} </li>` 
    }   
    inp.value = '';
    list.innerHTML = data;
}



function generatePassword() {
    var password = "";
    var passwordLength = 6;
    
  
    for (var i = 0; i < passwordLength; i++) {
      
      var randomNumber = Math.floor(Math.random() * 10);
      password += randomNumber;
    }
    
    return password;
  }
  