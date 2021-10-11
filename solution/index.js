import { localStorageValidator } from './services/vadilator'
import { updateDom } from './services/DOM'
import { updateTotal } from './services/taskList'
import { openMessage, startTime } from './services/timeIndicators'

function pageLoad() {
  localStorageValidator() // Create DOM by the Local Storage
  updateDom()
  updateTotal()
  openMessage()
  startTime()
}
pageLoad()
