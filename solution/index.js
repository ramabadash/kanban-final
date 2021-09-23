"use strict"
/*EVENT LISTENERS*/
const Addbuttons = document.querySelectorAll("button");
Addbuttons.forEach((button) => button.addEventListener("click", addTask));
document.querySelector("#search").addEventListener("keyup", searchBar);

/*INTERACTION FUNCTIONS*/
//Search case-insensitively so only tasks that match the search string are displayed.
function searchBar () {
    const searchStr = document.querySelector("#search").value.toLowerCase();
    const allTasks = document.querySelectorAll(".task");
    let taskContent;
    for (let i=0; i< allTasks.length; i++) {
        let task = allTasks[i];
        taskContent = task.textContent.toLowerCase();
        if (taskContent.includes(searchStr)) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }
    }
}
//Change task list by alt+1-3
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
//Add a new task to the list where we pressed on the button
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

