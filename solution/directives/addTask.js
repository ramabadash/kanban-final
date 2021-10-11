import { taskOnTop } from '../services/tasks'
import { saveNewDataLocal } from '../services/localStorage'
import { inputVadilator } from '../services/vadilator'
import { createListElement } from '../services/DOM'
// Add a new task to the list where we pressed on the button
export function addTask(event) {
  const currentButton = event.target
  const taskList = currentButton.nextElementSibling
  const input = currentButton.previousElementSibling
  const taskText = inputVadilator(input.value)
  // Insert new task element
  const newTaskElem = createListElement(taskText)
  taskOnTop(newTaskElem, taskList)
  input.value = ''
  // save on local storage
  saveNewDataLocal(taskList.id, taskList) // taskList.id = tasks[keys]
}
