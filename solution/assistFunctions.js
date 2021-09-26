"use strict"
//play loader
function playLoader() {
    const loader = document.querySelector("#loader");
    loader.classList.add("loader");
    loader.style.display = "block";
}
//stop loader
function stopLoader() {
    loader.classList.remove("loader");
    loader.style.display = "none";
}
/* DOM RELATED */
//Rebuilds the elements in DOM based on local storage
function updateDom() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    for (let key in tasks) {
        let listElem = document.getElementById(key);
        //If there are existing tasks in memory you will create new elements
        if (tasks[key].length > 0) {
            for (let content of tasks[key]) {
                let newTaskElem = createListElement(content);
                listElem.appendChild(newTaskElem);
            }
        }
    }
}
//
function cleanDom() {
    const allTaskElem = document.querySelectorAll(".task");
    for (let task of allTaskElem) task.remove();
}
/*DATA RELATED*/
//Takes the information from the local storage, if the information is empty assign it an empty task template. Returns the updated content.
function dataReconstruction() {
    let primaryData = JSON.parse(window.localStorage.getItem('tasks'));  //gets local primary data after refresh
    if(primaryData === null) { // There is no local storage -> define new empty one
        tasks = {"todo":[], "in-progress":[], "done":[] };
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } 
    return JSON.parse(window.localStorage.getItem('tasks'));
}
//
function saveDataLocal (data) {
    localStorage.setItem("tasks", JSON.stringify(data));
}
//Save to local all list new information
function saveNewDataLocal (key, list) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskList = list.childNodes;
    const newTaskArray = [];
    let taskContent;
    //create an array of content
    for (let i = 0; i < taskList.length; i++) { 
        taskContent = taskList[i].textContent;
        newTaskArray.push(taskContent);
    }
    tasks[key] = newTaskArray;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateTotal();
}
/* ELEMENT CREATION */
//Add task on top
function taskOnTop (newTaskElem, taskList) {
    if (!newTaskElem || !taskList) return;
    if (taskList.id === "done") goodJob();
    if (!taskList.hasChildNodes()){ //There are no tasks
        taskList.appendChild(newTaskElem);
    } else {
        const firstTask = taskList.firstElementChild;
        firstTask.insertAdjacentElement("beforebegin", newTaskElem);
    }
}
//Create List Element
function createListElement (innerText) {
    const eventListeners = {mouseover: changeTaskList, click: editTask, dragstart: draggableDataTransfer};
    return createElement("li", innerText, [], ["task"], {"draggable": true}, eventListeners);
}
//Create Element
function createElement(tagName, innerText, children = [], classes = [], attributes = {}, eventListeners = {}) {
    let newElement = document.createElement(tagName);
    //children
    for (let child of children){
        newElement.append(child);
    }
    //classes
    for (let clas of classes){
        newElement.classList.add(clas);
    }
    //attributes
    const attributesKeys = Object.keys(attributes);
    const attributesValues =Object.values(attributes);
    for (let i = 0; i < attributesKeys.length; i++){
        newElement.setAttribute(attributesKeys[i],attributesValues[i]);
    }
    //eventListeners
    const eventListenersKeys = Object.keys(eventListeners);
    const eventListenersValues =Object.values(eventListeners);
    for (let i = 0; i < eventListenersKeys.length; i++){
        newElement.addEventListener(eventListenersKeys[i],eventListenersValues[i]);
    }
    //inner text
    newElement.textContent = innerText;

    return newElement;
}