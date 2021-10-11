// Show "good job" img and hidde after 2 seconds
function goodJob() {
  const imgElem = document.querySelector('img')
  imgElem.style.display = 'flex' // show img
  setTimeout(() => (imgElem.style.display = 'none'), 2000) // hidde img
}
// Add task on top
export function taskOnTop(newTaskElem, taskList) {
  if (!newTaskElem || !taskList) return
  if (taskList.id === 'done') goodJob()
  taskList.insertBefore(newTaskElem, taskList.firstElementChild)
}
