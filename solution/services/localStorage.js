import { updateTotal } from './taskList'
//
export function saveDataLocal(data) {
  localStorage.setItem('tasks', JSON.stringify(data))
}
// Save to local all list new information
export function saveNewDataLocal(key, list) {
  const taskList = list.childNodes
  const newTaskArray = []
  // create an array of content
  for (let i = 0; i < taskList.length; i + 1) {
    const taskContent = taskList[i].textContent
    newTaskArray.push(taskContent)
  }
  const tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks[key] = newTaskArray
  localStorage.setItem('tasks', JSON.stringify(tasks))
  updateTotal()
}
