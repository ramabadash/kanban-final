import { saveNewDataLocal } from '../services/localStorage'
import { taskOnTop } from '../services/tasks'

// Create a unique and temporary class and move it when dragging a task item
export function draggableDataTransfer(event) {
  const draggableElem = event.target
  draggableElem.classList.add('draggable-task')
  event.dataTransfer.setData('text/plain', draggableElem.classList[1])
  document.getElementById('delete').style.display = 'grid' // display delete task area
}
// Task drop on a div section
export function taskDrop(event) {
  try {
    event.preventDefault()
    // get the correct task
    const droppedTaskClass = event.dataTransfer.getData('text/plain')
    const droppedTask = document.querySelector(`.${droppedTaskClass}`)
    const previousList = droppedTask.parentElement
    const nextList = event.target.lastElementChild
    // If it is delete task erea
    if (event.target.id === 'delete') {
      droppedTask.remove() // Task delete
      saveNewDataLocal(previousList.id, previousList) // save old list changes to local
    } else {
      taskOnTop(droppedTask, nextList) // List transfer
      // save new arrangement
      saveNewDataLocal(previousList.id, previousList) // save old list changes to local
      saveNewDataLocal(nextList.id, nextList) // save new list changes to local
    }
    droppedTask.classList.remove('draggable-task')
    document.getElementById('delete').style.display = 'none' // display delete task area
  } catch (error) {
    alert('Opps, Try to be more accurate')
  }
}

// Drag and Drop
const allSections = document.querySelectorAll('.section') // all 3 task sections
for (const section of allSections) {
  section.addEventListener('dragover', (event) => event.preventDefault())
  section.addEventListener('drop', taskDrop)
}
const deleteElem = document.querySelector('#delete')
deleteElem.addEventListener('dragover', (event) => event.preventDefault())
deleteElem.addEventListener('drop', taskDrop)
