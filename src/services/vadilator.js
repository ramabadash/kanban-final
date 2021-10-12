// Takes the information from the local storage, if the information is empty assign it an empty task template. Returns the updated content.
export function localStorageValidator() {
  const primaryData = JSON.parse(window.localStorage.getItem('tasks')) // gets local primary data after refresh
  if (primaryData === null) {
    // There is no local storage -> define new empty one
    const tasks = { todo: [], 'in-progress': [], done: [] }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  return JSON.parse(window.localStorage.getItem('tasks'))
}

// If the input is blank it will throw a note to the user and otherwise return the input
export function inputVadilator(input) {
  // Trying to submit empty tasks
  if (input.length === 0) {
    alert("Can't insert empty task. Try again")
  } else return input
}
