// Add your JS here.

let inputElement=document.querySelector(".new-todo");
inputElement.addEventListener("keypress", newTodo);

function newTodo(e) {
  if (e.keyCode == 13){
    let element = document.querySelector('.todo-list');
    let listItem = document.createElement('li');
    const currentItem = e.target.value;
    listItem.innerHTML="<div class='view'><label>" + currentItem + "</label></div>"
    element.appendChild( listItem );
    inputElement.value="";
  }
  return newTodo;

  }
