import { addTask } from './addTask'
import { saveToApi, loadFromApi } from './networkButtons'
import { clearPage } from '../services/DOM'

// create spesific handler to every button group
function buttonsHandler(event) {
  const parantElem = event.target.parentElement
  const elementId = event.target.id
  if (parantElem.tagName === 'DIV') addTask(event)
  // add task buttons
  else if (elementId === 'save-btn') saveToApi()
  // save button
  else if (elementId === 'load-btn') loadFromApi()
  // load button
  else if (elementId === 'clear-btn') clearPage()
  // clear tasks from DOM and local storage
}

const addButtons = document.querySelectorAll('button')
addButtons.forEach((button) => button.addEventListener('click', buttonsHandler))
