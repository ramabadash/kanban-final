"use strict"
/*EVENT LISTENERS*/
const Addbuttons = document.querySelectorAll("button");
Addbuttons.forEach((button) => button.addEventListener("click", addTask));

function changeTaskList (event) {
    let mouseEvent = event;
    let currentTask = mouseEvent.target;
        document.onkeydown = (event)=>{
            let nextList;
            if(event.altKey && event.key === "1"){
                nextList = document.querySelector(".to-do-tasks");
            } else if (event.altKey && event.key === "2"){
                nextList = document.querySelector(".in-progress-tasks");
            } else if (event.altKey && event.key === "3") {
                nextList = document.querySelector(".done-tasks");
            } else {
                return;
            }
            taskOnTop (currentTask, nextList);
            mouseEvent = {};
            currentTask = mouseEvent.target;
         }; 
}

/*INTERACTION FUNCTIONS*/

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
    const newTaskElem = createElement("li", taskText, [], ["task"], {}, {mouseover: changeTaskList});
    taskOnTop (newTaskElem, taskList);
    input.value = "";
}

