import { saveNewDataLocal } from '../services/localStorage'
import { taskOnTop } from '../services/tasks'
import { nextListByKey } from '../services/taskList'

// Change task list by alt+1-3
export function changeTaskList(e) {
  let mouseEvent = e
  let currentTask = mouseEvent.target
  const previousList = currentTask.parentElement
  document.onkeydown = (event) => {
    const nextList = nextListByKey(event)
    if (!nextList) return // there is not net list
    if (nextList.id === previousList.id) return // If it is the same list
    taskOnTop(currentTask, nextList)
    // save new arrangement
    saveNewDataLocal(previousList.id, previousList) // save old list changes to local
    saveNewDataLocal(nextList.id, nextList) // save new list changes to local
    mouseEvent = {}
    currentTask = mouseEvent.target
  }
}
