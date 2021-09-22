"use strict"

const Addbuttons = document.querySelectorAll("button");
Addbuttons.forEach((button) => button.addEventListener("click", addTask));


function addTask (event) {
    const currentButton = event.target;
    const taskList = currentButton.nextElementSibling;
    const input = currentButton.previousElementSibling;
    const taskText = input.value;
    //Trying to submit empty tasks
    if (taskText.length === 0) {
        alert ("Can't insert empty task. Try again");
        return;
    }
    //Insert new task element
    const newTaskElem = createElement("li", taskText, [], ["task"], {}, {});
    if (taskList.children.length === 0){ //There are no tasks
        taskList.appendChild(newTaskElem);
    } else {
        const firstTask = taskList.firstElementChild;
        firstTask.insertAdjacentElement("beforebegin", newTaskElem);
    }
    input.value = "";
}

