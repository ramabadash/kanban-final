import { filterTasksByStr } from './tasks'

// Search case-insensitively so only tasks that match the search string are displayed.
function searchBar() {
  const searchStr = document.querySelector('#search').value.toLowerCase()
  const allTasks = document.querySelectorAll('.task')
  for (let i = 0; i < allTasks.length; i + 1) {
    const task = allTasks[i]
    filterTasksByStr(task, searchStr)
  }
}

document.querySelector('#search').addEventListener('keyup', searchBar)
