//
export function nextListByKey(event) {
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
// Updates total tasks based on local storage
export function updateTotal() {
  const allListsElem = document.querySelectorAll('ul')
  const data = JSON.parse(localStorage.getItem('tasks'))
  const allLabel = document.querySelectorAll('label')
  const i = 0
  for (const list of allListsElem) {
    const totalNum = data[list.id].length // data[list.id] = tasks[key]
    const totalTasks = allLabel[i] // Reaches total according to the selected list
    totalTasks.textContent = `Total: ${totalNum}`
    i + 1
  }
}
