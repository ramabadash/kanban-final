"use strict"
dataReconstruction (); // Create DOM by the Local Storage
updateDom();

/*EVENT LISTENERS*/
const addButtons = document.querySelectorAll("button");
addButtons.forEach((button) => button.addEventListener("click", buttonsHandler));
document.querySelector("#search").addEventListener("keyup", searchBar);
//Drag and Drop
const allSections = document.querySelectorAll(".section");
for (let section of allSections) {
    section.addEventListener("dragover", (event) => event.preventDefault());
    section.addEventListener("drop", taskDrop); 
}

/*INTERACTION FUNCTIONS*/
//Task drop on a div section
function taskDrop (event) {
    event.preventDefault();
    //get the correct task
    const droppedTaskClass = event.dataTransfer.getData("text/plain");
    const droppedTask = document.querySelector(`.${droppedTaskClass}`);
    const previousList = droppedTask.parentElement;
    const nextList = event.target.lastElementChild;
    taskOnTop(droppedTask, nextList); //List transfer
    //save new arrangement
    saveNewDataLocal(previousList.id, previousList); // save old list changes to local
    saveNewDataLocal(nextList.id, nextList); // save new list changes to local
    
    droppedTask.classList.remove("draggable-task");
}


//Edit task content
function editTask (event) {
    const currentTask = event.target;
    const currentList = currentTask.parentElement;
    currentTask.setAttribute("contenteditable", true);
    currentTask.onblur = () => {
        saveNewDataLocal(currentList.id, currentList);
        currentTask.setAttribute("contenteditable", false);
    }
}
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
    let previousList = currentTask.parentElement;
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
            //save new arrangement
            saveNewDataLocal(previousList.id, previousList); // save old list changes to local
            saveNewDataLocal(nextList.id, nextList); // save new list changes to local
            mouseEvent = {};
            currentTask = mouseEvent.target;
         }; 
}
//create spesific handler to every button group
function buttonsHandler (event) {
    const parantElem = event.target.parentElement;
    const elementId = event.target.id;
    if (parantElem.tagName === "DIV") addTask (event); //add task buttons
    else if (elementId === "save-btn") saveToApi (); //save button
    else if (elementId === "load-btn") loadFromApi (); //load button
    
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
    const newTaskElem = createListElement(taskText);
    taskOnTop (newTaskElem, taskList);
    input.value = "";
    //save on local storage
    saveNewDataLocal (taskList.id, taskList); // taskList.id = tasks[keys]
}
//save current information to API
async function saveToApi () {
    playLoader();
    const response = await fetch('https://json-bins.herokuapp.com/bin/614b63eae352a453bebed50b', {
      method: 'PUT',
      body:  JSON.stringify({
        tasks: dataReconstruction(),
      }),
      headers: {
         'Content-Type': 'application/json',
      },
   });
   if (!response.ok) alert ("Please try again");
   stopLoader();
}
//load information from API
async function loadFromApi () {
    playLoader();

    const response = await fetch('https://json-bins.herokuapp.com/bin/614b63eae352a453bebed50b');
    if (!response.ok) alert ("Please try again");
    const data = await response.json();

    stopLoader();
    saveDataLocal(data.tasks);

    cleanDom();
    updateDom();
}
