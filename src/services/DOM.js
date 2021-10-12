import { changeTaskList } from '../directives/altMoveTask'
import { draggableDataTransfer } from '../directives/dragAndDropTask'
import { editTask } from '../directives/tasks'
import { updateTotal } from './taskList'

// clear tasks from DOM and local storage
export function clearPage() {
  cleanDom()
  const tasks = { todo: [], 'in-progress': [], done: [] }
  localStorage.setItem('tasks', JSON.stringify(tasks)) // delete local storage
  updateTotal()
}
// play loader
export function playLoader() {
  const loader = document.querySelector('#loader')
  loader.classList.add('loader')
  loader.style.display = 'block'
}
// stop loader
export function stopLoader() {
  const loader = document.querySelector('#loader')
  loader.classList.remove('loader')
  loader.style.display = 'none'
}
// Rebuilds the elements in DOM based on local storage
export function updateDom() {
  const tasks = JSON.parse(localStorage.getItem('tasks'))
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
export function cleanDom() {
  const allTaskElem = document.querySelectorAll('.task')
  for (const task of allTaskElem) task.remove()
}
// Create List Element
export function createListElement(innerText) {
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
  for (let i = 0; i < attributesKeys.length; i + 1) {
    newElement.setAttribute(attributesKeys[i], attributesValues[i])
  }
  // eventListeners
  const eventListenersKeys = Object.keys(eventListeners)
  const eventListenersValues = Object.values(eventListeners)
  for (let i = 0; i < eventListenersKeys.length; i + 1) {
    newElement.addEventListener(eventListenersKeys[i], eventListenersValues[i])
  }
  // inner text
  newElement.textContent = innerText

  return newElement
}
