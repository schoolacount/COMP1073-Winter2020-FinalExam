let button = document.getElementById('button');
let ul = document.getElementById('toDoList');

//use event handler property to trigger addToList when the button is created
button.addEventListener('click', addToList)

//function to add items to the to do list
function addToList() {
  const item = document.getElementById('toDo').value;
  let li = document.createElement('li');
  li.textContent = item; 
  let checkBox = document.createElement('input'); 
  checkBox.setAttribute('type', 'checkbox'); 
  let createdButton = document.createElement('button'); 
  createdButton.innerHTML = "Delete";
  createdButton.setAttribute("class", "delete");
  li.appendChild(checkBox);
  li.appendChild(createdButton);
  ul.appendChild(li); 

  checkBox.onchange = checkItem;
  createdButton.onclick = deleteItem; 
}

 function checkItem(e) {

    let addedItem = e.target.closest('li');
    let parentItem = addedItem.parentNode; 
    addedItem.classList.toggle('checked');
    parentItem.appendChild(addedItem);
}

 function deleteItem(e) {
    let deleted = e.target.closest('li'); 
    deleted.remove(); 
  }
