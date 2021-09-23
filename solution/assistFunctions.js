"use strict"
//
function dataReconstruction () {
    let primaryData = JSON.parse(window.localStorage.getItem('tasks'));  //gets local primary data after refresh
    if(primaryData === null) { // There is no local storage -> define new empty one
        tasks = {"todo":[], "in-progress":[], "done":[] };
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        updateDom();
    }
}
//
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
//Save to local all list information
function saveNewDataLocal (key, list) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskList = list.childNodes;
    const newTaskArray = [];
    let taskContent;
    for (let i = 0; i < taskList.length; i++) {
        taskContent = taskList[i].textContent;
        newTaskArray.push(taskContent);
    }
    tasks[key] = newTaskArray;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
//Add task on top
function taskOnTop (newTaskElem, taskList) {
    if (newTaskElem === undefined || taskList === undefined) return;
    if (!taskList.hasChildNodes()){ //There are no tasks
        taskList.appendChild(newTaskElem);
    } else {
        const firstTask = taskList.firstElementChild;
        firstTask.insertAdjacentElement("beforebegin", newTaskElem);
    }
}
//Create List Element
function createListElement (innerText) {
    return createElement("li", innerText, [], ["task"], {}, {mouseover: changeTaskList, click: editTask});
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