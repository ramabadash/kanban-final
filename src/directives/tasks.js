import { saveNewDataLocal } from '../services/localStorage'

// Edit task content
export function editTask(event) {
  const currentTask = event.target
  const currentList = currentTask.parentElement
  currentTask.setAttribute('contenteditable', true)
  currentTask.onblur = () => {
    saveNewDataLocal(currentList.id, currentList)
    currentTask.setAttribute('contenteditable', false)
  }
}
// Gets a task and a string. If it contains the string it will display the task otherwise it will disappear.
export function filterTasksByStr(taskElem, searchStr) {
  const task = taskElem
  const taskContent = task.textContent.toLowerCase()
  if (taskContent.includes(searchStr)) {
    task.style.display = ''
  } else {
    task.style.display = 'none'
  }
}
