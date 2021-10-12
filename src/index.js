import { localStorageValidator } from './services/vadilator'
import { updateDom } from './services/DOM'
import { updateTotal } from './services/taskList'
import { openMessage, startTime } from './services/timeIndicators'

import './styles.css'

import './services/localStorage'
import './services/tasks'

import './directives/addTask'
import './directives/altMoveTask'
import './directives/buttonsMainHandler'
import './directives/dragAndDropTask'
import './directives/networkButtons'
import './directives/searchTask'
import './directives/tasks'

function pageLoad() {
  localStorageValidator() // Create DOM by the Local Storage
  updateDom()
  updateTotal()
  openMessage()
  document.body.onload = 'startTime()'
}
pageLoad()
