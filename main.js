// Add your JS here.
inputElement.addEventListener("keypress", newTodo, true); {
    if (keyCode == 13);
}
  function newTodo(e) {
  let element = document.querySelector('.todo-List');
  let listItem = document.createElement('li');
  listItem.textContent = " ";
  console.log(listItem);
  element.appendChild( listItem );
  var div = document.createElement("div");
  document.body.appendChild(div);
  element.classList.add("view");

  }
  return newTodo;

}
