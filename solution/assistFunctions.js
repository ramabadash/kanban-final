/*---------------------------------------------------------------*/
/** ********Folder: "SERVICES", File: "DOM.JS" ********* */
/*---------------------------------------------------------------*/

// play loader
function playLoader() {
  const loader = document.querySelector('#loader')
  loader.classList.add('loader')
  loader.style.display = 'block'
}
// stop loader
function stopLoader() {
  loader.classList.remove('loader')
  loader.style.display = 'none'
}
// Rebuilds the elements in DOM based on local storage
function updateDom() {
  tasks = JSON.parse(localStorage.getItem('tasks'))
  for (const key in tasks) {
    const listElem = document.getElementById(key)
    // If there are existing tasks in memory you will create new elements
    if (tasks[key].length > 0) {
      for (const content of tasks[key]) {
        const newTaskElem = createListElement(content)
        listElem.appendChild(newTaskElem)
      }
    }
  }
}
//
function cleanDom() {
  const allTaskElem = document.querySelectorAll('.task')
  for (const task of allTaskElem) task.remove()
}
// Create List Element
function createListElement(innerText) {
  const eventListeners = {
    mouseover: changeTaskList,
    click: editTask,
    dragstart: draggableDataTransfer,
  }
  return createElement(
    'li',
    innerText,
    [],
    ['task'],
    { draggable: true },
    eventListeners
  )
}
// Create Element
function createElement(
  tagName,
  innerText,
  children = [],
  classes = [],
  attributes = {},
  eventListeners = {}
) {
  const newElement = document.createElement(tagName)
  // children
  for (const child of children) {
    newElement.append(child)
  }
  // classes
  for (const clas of classes) {
    newElement.classList.add(clas)
  }
  // attributes
  const attributesKeys = Object.keys(attributes)
  const attributesValues = Object.values(attributes)
  for (let i = 0; i < attributesKeys.length; i++) {
    newElement.setAttribute(attributesKeys[i], attributesValues[i])
  }
  // eventListeners
  const eventListenersKeys = Object.keys(eventListeners)
  const eventListenersValues = Object.values(eventListeners)
  for (let i = 0; i < eventListenersKeys.length; i++) {
    newElement.addEventListener(eventListenersKeys[i], eventListenersValues[i])
  }
  // inner text
  newElement.textContent = innerText

  return newElement
}

/*---------------------------------------------------------------*/
/** ********Folder: "SERVICES", File: "VADILATOR.JS" ********* */
/*---------------------------------------------------------------*/

// Takes the information from the local storage, if the information is empty assign it an empty task template. Returns the updated content.
function localStorageValidator() {
  const primaryData = JSON.parse(window.localStorage.getItem('tasks')) // gets local primary data after refresh
  if (primaryData === null) {
    // There is no local storage -> define new empty one
    tasks = { todo: [], 'in-progress': [], done: [] }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  return JSON.parse(window.localStorage.getItem('tasks'))
}

// If the input is blank it will throw a note to the user and otherwise return the input
function inputVadilator(input) {
  // Trying to submit empty tasks
  if (input.length === 0) {
    alert("Can't insert empty task. Try again")
  } else return input
}

/*---------------------------------------------------------------*/
/** ********Folder: "SERVICES", File: "LOCAL-STORAGE.JS" ********* */
/*---------------------------------------------------------------*/

//
function saveDataLocal(data) {
  localStorage.setItem('tasks', JSON.stringify(data))
}
// Save to local all list new information
function saveNewDataLocal(key, list) {
  const taskList = list.childNodes
  const newTaskArray = []
  // create an array of content
  for (let i = 0; i < taskList.length; i++) {
    const taskContent = taskList[i].textContent
    newTaskArray.push(taskContent)
  }
  tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks[key] = newTaskArray
  localStorage.setItem('tasks', JSON.stringify(tasks))
  updateTotal()
}

/*---------------------------------------------------------------*/
/** ********Folder: "SERVICES", File: "TASKS.JS" ********* */
/*---------------------------------------------------------------*/

// Add task on top
function taskOnTop(newTaskElem, taskList) {
  if (!newTaskElem || !taskList) return
  if (taskList.id === 'done') goodJob()
  taskList.insertBefore(newTaskElem, taskList.firstElementChild)
}

/*---------------------------------------------------------------*/
/** ********Folder: "SERVICES", File: "TASKS-LIST.JS" ********* */
/*---------------------------------------------------------------*/

//
function nextListByKey(event) {
  let nextList
  if (event.altKey && event.key === '1') {
    nextList = document.querySelector('.to-do-tasks')
  } else if (event.altKey && event.key === '2') {
    nextList = document.querySelector('.in-progress-tasks')
  } else if (event.altKey && event.key === '3') {
    nextList = document.querySelector('.done-tasks')
  } else {
    nextList = undefined
  }
  return nextList
}
