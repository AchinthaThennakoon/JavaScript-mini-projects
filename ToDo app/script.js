const newToDo = document.getElementById("newToDo");
const addBtn = document.getElementById("addBtn");
const todolist = document.getElementById("todolist");

addBtn.addEventListener("click", () => {

    const newToDoText = newToDo.value;
    if (newToDoText !== "") {
        const newToDoItem = document.createElement("li");
        newToDoItem.innerText = newToDoText;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";

        deleteBtn.classList.add("delete-todo-btn");
        deleteBtn.addEventListener("click", () => {
            newToDoItem.remove();
        });

        newToDoItem.appendChild(deleteBtn);
        todolist.appendChild(newToDoItem);
        newToDo.value ="";
    }

})