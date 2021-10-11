import { playLoader, stopLoader, updateDom, cleanDom } from '../services/DOM'
import { localStorageValidator } from '../services/vadilator'
import { updateTotal } from '../services/taskList'
import { saveDataLocal } from '../services/localStorage'

// save current information to API
export async function saveToApi() {
  playLoader()
  const response = await fetch(
    'https://json-bins.herokuapp.com/bin/614b63eae352a453bebed50b',
    {
      method: 'PUT',
      body: JSON.stringify({
        tasks: localStorageValidator(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  if (!response.ok) alert('Please try again')
  stopLoader()
}
// load information from API
export async function loadFromApi() {
  playLoader()

  const response = await fetch(
    'https://json-bins.herokuapp.com/bin/614b63eae352a453bebed50b'
  )
  if (!response.ok) alert('Please try again')
  const data = await response.json()

  stopLoader()
  saveDataLocal(data.tasks)

  cleanDom()
  updateDom()
  updateTotal()
}
